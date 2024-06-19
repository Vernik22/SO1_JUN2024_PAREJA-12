package Routes

import (
	"Backend/Instance"
	"Backend/Model"
	"context"
	"fmt"
	"log"
	"os/exec"
	"strconv"
	"strings"
	"syscall"

	"github.com/gofiber/fiber/v2"
)

func obtenerPorcentajeCPU(output string) string {
	lines := strings.Split(output, "\n")
	if len(lines) < 4 {
		return ""
	}

	cpuInfo := lines[3]

	fields := strings.Fields(cpuInfo)
	if len(fields) < 12 {
		return ""
	}

	// campo '%idle'
	idlePercentage := fields[len(fields)-1]
	return idlePercentage
}

func obtenerRam() uint64 {
	var info syscall.Sysinfo_t
	if err := syscall.Sysinfo(&info); err != nil {
		fmt.Printf("Error obteniendo información del sistema: %v\n", err)
		return 0
	}

	// El tamaño total de la memoria física está en info.Totalram
	totalMemory := info.Totalram * uint64(info.Unit)
	fmt.Printf("Total memory (bytes): %d\n", totalMemory)
	return totalMemory
}

func Setup(app *fiber.App) {
	app.Get("/", func(ctx *fiber.Ctx) error {
		return ctx.JSON("Hello World")
	})

	app.Get("/getRam", func(ctx *fiber.Ctx) error {
		//nameCol := "ram"
		//collection := Instance.Mg.Db.Collection(nameCol)
		/*
			err := collection.Drop(context.TODO())
			if err != nil {
				return err
			}
		*/
		cmd := exec.Command("sh", "-c", "cat /proc/ram_Par12")
		output, err := cmd.CombinedOutput()
		if err != nil {
			log.Fatalln(err)
		}
		out := string(output[:])
		//conv, _ := strconv.ParseUint(out, 10, 64)
		tot := obtenerRam()
		/*
			doc := Model.Data{Percent: out}

			_, err = collection.InsertOne(context.TODO(), doc)
			if err != nil {
				log.Fatal(err)
			}
		*/
		return ctx.JSON(fiber.Map{
			"status": 200,
			"total":  tot,
			"free":   out,
		})
	})

	app.Get("/insertRam", func(ctx *fiber.Ctx) error {
		ramP := ctx.Query("porcentaje")
		nameCol := "ram"
		collection := Instance.Mg.Db.Collection(nameCol)

		/*
			err := collection.Drop(context.TODO())
			if err != nil {
				return err
			}
		*/

		doc := Model.Data{Percent: ramP}

		_, err := collection.InsertOne(context.TODO(), doc)
		if err != nil {
			log.Fatal(err)
		}

		return ctx.JSON(fiber.Map{
			"status": 200,
		})
	})

	app.Get("/getProcess", func(ctx *fiber.Ctx) error {
		nameCol := "process"
		collection := Instance.Mg.Db.Collection(nameCol)
		/*
			err := collection.Drop(context.TODO())
			if err != nil {
				return err
			}
		*/
		cmd := exec.Command("sh", "-c", "cat /proc/cpu_Par12")
		output, err := cmd.CombinedOutput()
		if err != nil {
			log.Fatalln(err)
		}
		out := string(output[:])
		log.Print(out)

		doc := Model.Data{Percent: out}

		_, err = collection.InsertOne(context.TODO(), doc)
		if err != nil {
			log.Fatal(err)
		}

		return ctx.JSON(fiber.Map{
			"status":  200,
			"process": out,
		})
	})

	app.Get("/getCPU", func(ctx *fiber.Ctx) error {
		nameCol := "cpu"
		collection := Instance.Mg.Db.Collection(nameCol)

		/*
			err := collection.Drop(context.TODO())
			if err != nil {
				return err
			}
		*/
		cmd := exec.Command("mpstat")
		output, err := cmd.CombinedOutput()
		if err != nil {
			log.Fatalln(err)
		}
		out := string(output[:])

		usoCPU := obtenerPorcentajeCPU(out)

		doc := Model.Data{Percent: usoCPU}

		_, err = collection.InsertOne(context.TODO(), doc)
		if err != nil {
			log.Fatal(err)
		}

		return ctx.JSON(fiber.Map{
			"status":  200,
			"percent": usoCPU,
		})
	})

	app.Get("/insertProcess", func(ctx *fiber.Ctx) error {
		log.Println("Insertando proceso")

		cmd := exec.Command("sleep", "infinity")
		err := cmd.Start()
		if err != nil {
			log.Fatal(err)
		}

		return ctx.Status(200).JSON(fiber.Map{
			"success": true,
			"pid":     cmd.Process.Pid,
		})
	})

	app.Get("/delProcess", func(ctx *fiber.Ctx) error {
		pid := ctx.Query("pid")
		pidInt, err := strconv.Atoi(pid)
		if err != nil {
			log.Fatal(err)
		}

		cmd := exec.Command("kill", "-9", strconv.Itoa(pidInt))
		err = cmd.Run()
		if err != nil {
			log.Fatal(err)
		}

		return ctx.Status(200).JSON(fiber.Map{
			"success": true,
		})
	})
}

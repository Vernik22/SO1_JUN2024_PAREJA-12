package main

import (
	"Backend/Database"
	"Backend/Routes"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	if err := Database.Connect(); err != nil {
		log.Fatal("Error en ", err)
	}

	app.Use(cors.New())

	Routes.Setup(app)

	if err := app.Listen(":8000"); err != nil {
		panic(err)
	}
}

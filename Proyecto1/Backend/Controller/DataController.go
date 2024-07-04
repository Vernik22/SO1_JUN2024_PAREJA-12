package Controller

import (
	"Backend/Instance"
	"Backend/Model"
	"context"
	"log"

	"github.com/gofiber/fiber/v2"
)

func InsertData(c *fiber.Ctx, nameCol string, dataParam string) error {
	collection := Instance.Mg.Db.Collection(nameCol)
	doc := Model.Data{Percent: dataParam}

	_, err := collection.InsertOne(context.TODO(), doc)
	if err != nil {
		log.Fatal(err)
	}
	return c.Status(201).JSON(dataParam)
}

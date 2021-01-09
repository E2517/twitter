package main

import (
	"log"

	"github.com/e2527/twitter/backend/database"
	"github.com/e2527/twitter/backend/routes"
)

func main() {
	if database.CheckConnection() == 0 {
		log.Fatal("Error: no connection to MongoDB")
		return
	}
	routes.Handlers()

}

import express from "express";

import animalController from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/", animalController.createAnimal);
router.put("/", animalController.updateAnimal);
router.delete("/:id", animalController.deleteAnimalById);
router.get("/", animalController.getAllAnimals);
router.get("/:id", animalController.getAnimalById);

export default router;

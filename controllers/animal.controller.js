import animalService from "../services/animal.service.js";

async function createAnimal(request, response, next) {
  try {
    const animal = request.body;
    if (!animal.proprietarioId || !animal.nome || !animal.tipo) {
      throw new Error("The fields OwnerId, Name and Type are required.");
    }
    response.send(await animalService.createAnimal(animal));
    logger.info(`POST on /animal - ${JSON.stringify(animal)}`);
  } catch (error) {
    next(error);
  }
}

async function updateAnimal(request, response, next) {
  try {
    const animal = request.body;
    if (
      !animal.animalId ||
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietarioId
    ) {
      throw new Error("The fields Id, Name, Type and OwnerId are required.");
    }
    response.send(await animalService.updateAnimal(animal));
    logger.info(`PUT on /animal - ${JSON.stringify(animal)}`);
  } catch (error) {
    next(error);
  }
}

async function deleteAnimalById(request, response, next) {
  try {
    const id = request.params.id;
    if (id == null) {
      throw new Error("To delete a animal is necessary to pass the Id");
    }
    response.send(await animalService.deleteAnimalById(id));
    logger.info(`DELETE on /animal/:id - ${id}`);
  } catch (error) {
    next(error);
  }
}

async function getAllAnimals(request, response, next) {
  try {
    response.send(await animalService.getAllAnimals());
    logger.info(`GET on /animal`);
  } catch (error) {
    next(error);
  }
}

async function getAnimalById(request, response, next) {
  try {
    const id = request.params.id;
    if (!id == null) {
      throw new Error(
        "To search for a specific animal is required to pass an Id."
      );
    }
    response.send(await animalService.getAnimalById(id));
    logger.info(`GET on /animal/:id - ${id}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createAnimal,
  deleteAnimalById,
  updateAnimal,
  getAllAnimals,
  getAnimalById,
};

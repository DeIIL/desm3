import Animal from "../models/animal.model.js";

async function insertAnimal(animal) {
  try {
    return await Animal.create(animal);
  } catch (error) {
    throw error;
  }
}

async function updateAnimal(animal) {
  try {
    await Animal.update(animal, {
      where: {
        animalId: animal.animalId,
      },
    });
    return await getAnimalById(animal.animalId);
  } catch (error) {
    throw error;
  }
}

async function deleteAnimalById(id) {
  try {
    await Animal.destroy({
      where: {
        animalId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getAllAnimals() {
  try {
    return await Animal.findAll();
  } catch (error) {
    throw error;
  }
}

async function getAnimalById(id) {
  try {
    return await Animal.findByPk(id);
  } catch (error) {
    throw error;
  }
}

export default {
  insertAnimal,
  updateAnimal,
  deleteAnimalById,
  getAllAnimals,
  getAnimalById,
};

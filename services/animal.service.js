import animalRepository from "../repository/animal.repository.js";

async function createAnimal(animal) {
  return await animalRepository.insertAnimal(animal);
}

async function updateAnimal(animal) {
  return await animalRepository.updateAnimal(animal);
}

async function deleteAnimalById(id) {
  return await animalRepository.deleteAnimalById(id);
}

async function getAllAnimals() {
  return await animalRepository.getAllAnimals();
}

async function getAnimalById(id) {
  return await animalRepository.getAnimalById(id);
}

export default {
  createAnimal,
  updateAnimal,
  deleteAnimalById,
  getAllAnimals,
  getAnimalById,
};

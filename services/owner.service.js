import ownerRepository from "../repository/owner.repository.js";

async function createOwner(owner) {
  return await ownerRepository.insertOwner(owner);
}

async function updateOwner(owner) {
  return await ownerRepository.updateOwner(owner);
}

async function getAllOwners() {
  return await ownerRepository.getAllOwners();
}

async function getOwnerById(id) {
  return await ownerRepository.getOwnerById(id);
}

async function deleteOwnerById(id) {
  return await ownerRepository.deleteOwnerById(id);
}

export default {
  createOwner,
  updateOwner,
  getAllOwners,
  getOwnerById,
  deleteOwnerById,
};

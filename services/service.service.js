import serviceRepository from "../repository/service.repository.js";

async function createService(service) {
  return await serviceRepository.insertService(service);
}

async function getAllServices() {
  return await serviceRepository.getAllServices();
}

async function getServiceByOwnerId(id) {
  return await serviceRepository.getServiceByOwnerId(id);
}

export default {
  createService,
  getAllServices,
  getServiceByOwnerId,
};

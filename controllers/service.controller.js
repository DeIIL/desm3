import serviceService from "../services/service.service.js";

async function createService(request, response, next) {
  try {
    const service = request.body;
    if (!service.descricao || !service.valor || !service.animalId) {
      throw new Error(
        "The fields Description, Value and AnimalId are required."
      );
    }
    response.send(await serviceService.createService(service));
    logger.info(`POST on /service - ${JSON.stringify(service)}`);
  } catch (error) {
    next(error);
  }
}

async function updateService() {}

async function getAllServices(request, response, next) {
  try {
    response.send(await serviceService.getAllServices());
    logger.info(`GET on /service`);
  } catch (error) {
    next(error);
  }
}

async function getServiceByOwnerId(request, response, next) {
  try {
    const id = request.query.proprietarioId;
    if (id == null) {
      throw new Error("To make a search is necessary to pass an id.");
    }
    response.send(await serviceService.getServiceByOwnerId(id));
    logger.info(`GET on /service/owner - ${id}`);
  } catch (error) {
    next(error);
  }
}

async function deleteServiceById() {}

export default {
  createService,
  updateService,
  getAllServices,
  getServiceByOwnerId,
  deleteServiceById,
};

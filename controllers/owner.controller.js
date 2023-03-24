import ownerService from "../services/owner.service.js";

async function createOwner(request, response, next) {
  try {
    let owner = request.body;
    if (!owner.nome || !owner.telefone) {
      throw new Error("The fields Name and Phone are required.");
    }
    response.send(await ownerService.createOwner(owner));
    logger.info(`POST on /owner - ${JSON.stringify(owner)}`);
  } catch (error) {
    next(error);
  }
}

async function updateOwner(request, response, next) {
  try {
    let owner = request.body;
    if (!owner.proprietarioId || !owner.nome || !owner.telefone) {
      throw new Error("The owner Id and fields Name and Phone are required");
    }
    response.send(await ownerService.updateOwner(owner));
    logger.info(`PUT on /owner - ${JSON.stringify(owner)}`);
  } catch (error) {
    next(error);
  }
}

async function deleteOwnerById(request, response, next) {
  try {
    let id = request.params.id;
    if (id == null) {
      throw new Error("To delete an owner is necessary to pass the Id.");
    }
    response.send(await ownerService.deleteOwnerById(id));
    logger.info(`DELETE on /owner:id - ${JSON.stringify(id)}`);
  } catch (error) {
    next(error);
  }
}

async function getAllOwners(request, response, next) {
  try {
    response.send(await ownerService.getAllOwners());
    logger.info(`GET on /owner}`);
  } catch (error) {
    next(error);
  }
}

async function getOwnerById(request, response, next) {
  try {
    let id = request.params.id;
    if (id == null) {
      throw new Error("To make a search is necessary to pass an id.");
    }
    response.send(await ownerService.getOwnerById(id));
    logger.info(`GET on /owner:id - ${JSON.stringify(id)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createOwner,
  updateOwner,
  getAllOwners,
  getOwnerById,
  deleteOwnerById,
};

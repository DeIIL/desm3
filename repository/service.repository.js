import Animal from "../models/animal.model.js";
import Service from "../models/service.model.js";

async function insertService(service) {
  try {
    return await Service.create(service);
  } catch (error) {
    throw error;
  }
}

async function getAllServices() {
  try {
    return await Service.findAll();
  } catch (error) {
    throw error;
  }
}

async function getServiceByOwnerId(id) {
  try {
    return await Service.findAll({
      include: [
        {
          model: Animal,
          where: { proprietarioId: id },
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

export default {
  insertService,
  getAllServices,
  getServiceByOwnerId,
};

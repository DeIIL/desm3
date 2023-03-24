import express from "express";
import serviceController from "../controllers/service.controller.js";

const router = express.Router();

router.post("/", serviceController.createService);
router.put("/", serviceController.updateService);
router.get("/", serviceController.getAllServices);
router.get("/owner", serviceController.getServiceByOwnerId);
router.delete("/", serviceController.deleteServiceById);

export default router;

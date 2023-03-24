import express from "express";

import ownerController from "../controllers/owner.controller.js";

const router = express.Router();

router.post("/", ownerController.createOwner);
router.put("/", ownerController.updateOwner);
router.get("/", ownerController.getAllOwners);
router.get("/:id", ownerController.getOwnerById);
router.delete("/:id", ownerController.deleteOwnerById);

export default router;

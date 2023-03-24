import express from "express";

import postController from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", postController.createPost);
router.post("/comentario", postController.createComment);
router.get("/", postController.getAllPosts);

export default router;

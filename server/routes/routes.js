import express from "express";
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controller/post-controller.js";
import { uploadImage, getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/create", createPost);
router.get("/posts", getPosts);
router.get("/post/:id", getPost);
router.post("/update/:id", updatePost);
router.delete("/update/:id", deletePost);
router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);

export default router;

import express from "express";
import {
  createProductController,
  updateProductController,
  deleteProductController,
  getAllProductController,
  getProductController,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProductController);

router.get("/:id", getProductController);

router.post("/", createProductController);

router.put("/:id", updateProductController);

router.delete("/:id", deleteProductController);

export default router;


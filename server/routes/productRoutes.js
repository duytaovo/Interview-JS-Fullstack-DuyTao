import express from "express";
import {
  createProductController,
  updateProductController,
  deleteProductController,
  getAllProductController,
  getSingleProductController,
} from "../controllers/productController.js";

const router = express.Router();

//FETCH ALL PRODUCT
router.get("/", getAllProductController);

//FETCH SINGLE PRODUCT
router.get("/:id", getSingleProductController);

//CREATE PRODUCT
router.post("/", createProductController);

//UPDATE PRODUCT
router.put("/:id", updateProductController);

//DELETE PRODUCT
router.delete("/:id", deleteProductController);

export default router;


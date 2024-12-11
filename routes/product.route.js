import express from "express";
import Product from "../models/product.model.js";
import { getProducts, getProduct, postProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

//get all products
router.get('/',getProducts);

//get product by id
router.get('/:id',getProduct);

//update product if exists
router.put('/:id',updateProduct);

//delete product if exists
router.delete('/:id',deleteProduct);

//post or create or add a new product
router.post('/',postProduct);



export default router;
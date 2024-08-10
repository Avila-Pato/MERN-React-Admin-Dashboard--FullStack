import express from "express";
import { getProducts, getCustomers } from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers); // Cambia a /customers para coincidir con el frontend

export default router;

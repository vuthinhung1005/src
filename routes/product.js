import express from "express";
import { createPro, get, getAll, remove, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/add", checkPermission, createPro);
router.delete("/products/:id", checkPermission, remove);
router.patch("/products/:id", checkPermission, update);

export default router;

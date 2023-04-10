import express from "express";
import { create, get, getAll, remove, update } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.get("/categories/:id", get);
router.delete("/categories/:id", checkPermission, remove);
router.get("/categories", getAll);
router.post("/categories", checkPermission, create);
router.put("/categories/:id", checkPermission, update);

export default router;

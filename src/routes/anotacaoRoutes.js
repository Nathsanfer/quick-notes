import express from "express";
import anotacaoController from "../controllers/anotacaoController.js";

const router = express.Router();

router.get("/", anotacaoController.getAll);
router.post("/", anotacaoController.create);
router.put("/:id", anotacaoController.update);
router.delete("/:id", anotacaoController.delete);

export default router;

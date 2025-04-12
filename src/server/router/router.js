import { Router } from "express";
import { UsuarioController } from "../controller/user/index.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Teste da api");
});

router.post(
  "/usuario",
  UsuarioController.createValidation,
  UsuarioController.createUp
);

router.get("/usuarios", UsuarioController.buscaUsuario);

export default router;

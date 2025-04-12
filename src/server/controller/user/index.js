import * as create from "./Create.js";
import * as busacaUsuario from "./BuscarUsuario.js";

export const UsuarioController = {
  ...create,
  ...busacaUsuario,
};

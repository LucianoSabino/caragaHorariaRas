import * as createUsuario from "./Create.js";
import * as buscaUsuario from "./BuscarUsuario.js";

export const UsuarioProvide = {
  ...createUsuario,
  ...buscaUsuario,
};

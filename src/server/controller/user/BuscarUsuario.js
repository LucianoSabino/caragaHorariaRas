import { UsuarioProvide } from "../../providers/user/index.js";
import { StatusCodes } from "http-status-codes";

export const buscaUsuario = async (req, res) => {
  try {
    const result = await UsuarioProvide.busca();
    res.status(StatusCodes.OK).send(result);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

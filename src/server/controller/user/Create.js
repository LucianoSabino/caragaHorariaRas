import { UsuarioProvide } from "../../providers/user/index.js";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/index.js";
import { StatusCodes } from "http-status-codes";

export const createValidation = validation((getSchema) => ({
  body: getSchema(
    yup.object().shape({
      name: yup.string().required().min(3).max(255),
      matricula: yup.string().required(),
      curso: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required(),
      telefone: yup.string().required(),
      robo: yup.string().required(),
      sobre: yup.string().required(),
    })
  ),
}));

export const createUp = async (req, res) => {
  try {
    const result = await UsuarioProvide.create(req.body);
    res.status(StatusCodes.OK).send(result);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

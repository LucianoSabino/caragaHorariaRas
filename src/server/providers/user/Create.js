import prisma from "../../database/prisma.js";

export const create = async (data) => {
  try {
    const result = await prisma.user.create({
      data,
    });

    return result;
  } catch (error) {
    console.log("Erro ao criar usuario", error);
    throw error;
  }
};

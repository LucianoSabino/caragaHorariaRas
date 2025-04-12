import prisma from "../../database/prisma.js";

export const busca = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    throw error;
  }
};

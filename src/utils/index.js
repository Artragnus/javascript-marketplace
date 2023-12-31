import { db } from "../database/index.js";

export const getUserDataByEmail = async (email, table) => {
  try {
    const userData = await db(table).where({ email });

    if (userData) {
      return userData[0];
    }

    return null;
  } catch (error) {
    throw new Error(error.message);
  }

  return next();
};

export const sendServerErrorResponse = (res) => {
  return res.status(500).json({ mensagem: "Erro interno do servidor" });
};

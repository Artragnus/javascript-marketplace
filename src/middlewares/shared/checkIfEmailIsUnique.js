import { getUserDataByEmail } from "../../utils/index.js";

export const checkIfEmailIsUnique = (table) => async (req, res, next) => {
  const email = req.body;

  try {
    const existingEmail = await getUserDataByEmail(email, table);

    if (existingEmail) {
      return (
        res.status(400), json({ mensagem: "o E-Mail já está cadastrado." })
      );
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }

  next();
};

import { getUserDataByEmail } from "../../utils/index.js";
import bcrypt from "bcrypt";
import { sendServerErrorResponse } from "../../utils/index.js";

export const userValidateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const userData = await getUserDataByEmail(email, "users");

    req.user = userData;

    const validatePassword = await bcrypt.compare(password, userData.password);

    if (!userData || !validatePassword) {
      return res.status(400).json({ mensagem: "Usuário ou senha incorreto." });
    }
  } catch (error) {
    sendServerErrorResponse(res);
  }

  return next();
};

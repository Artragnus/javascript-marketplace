import jwt from "jsonwebtoken";

import { sendServerErrorResponse } from "../../utils/index.js";

export const userLogin = async (req, res) => {
  const { id, name, email } = req.user;
  try {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_PASS, {
      expiresIn: "2 days",
    });

    const userLoginInformation = { id, name, email, token };

    return res.status(200).json(userLoginInformation);
  } catch (error) {
    sendServerErrorResponse(res);
  }
};

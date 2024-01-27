import { db } from "../../database/index.js";

export const isUserAuthenticated = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ mensagem: "Não autorizado." });
  }

  const token = authorization.split(" ")[1];
  try {
    const { id } = jwt.verify(token, process.env.JWT_PASS);

    const user = await db("users").where({ id });

    if (user.rowCount < 1) {
      return res.status(401).json({ mensagem: "Não autorizado." });
    }

    const { senha, ...LoggedUser } = user.rows[0];

    req.user = LoggedUser;

    next();
  } catch (error) {
    return res.status(401).json({ mensagem: "Não autorizado." });
  }
};

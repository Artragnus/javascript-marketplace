import { db } from "../../database/index.js";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";

export const userRegistration = async (req, res) => {
  const { name, email, password } = req.body;

  const userId = randomUUID();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = await db("users")
      .insert({
        id: userId,
        name,
        email,
        password: hashedPassword,
      })
      .returning(["id", "name", "email"]);

    return res.status(201).json(userData[0]);
  } catch (error) {
    console.log(error);
  }
};

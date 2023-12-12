import express from "express";

export const router = express();

import { userRegistration } from "./controllers/user/registration.js";
import { checkIfEmailIsUnique } from "./middlewares/shared/checkIfEmailIsUnique.js";
import { validateBodyRequest } from "./middlewares/shared/validateBodyRequest.js";
import { userRegistrationSchema } from "./lib/joi/schema/user/registration.js";

router.post(
  "/cadastro",
  validateBodyRequest(userRegistrationSchema),
  checkIfEmailIsUnique("users"),
  userRegistration
);

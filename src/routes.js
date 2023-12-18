import express from "express";

export const router = express();

import { userRegistration } from "./controllers/user/registration.js";
import { checkIfEmailIsUnique } from "./middlewares/shared/checkIfEmailIsUnique.js";
import { validateBodyRequest } from "./middlewares/shared/validateBodyRequest.js";
import { userRegistrationSchema } from "./lib/joi/schema/user/registration.js";
import { userLogin } from "./controllers/user/login.js";
import { userValidateLogin } from "./middlewares/user/login.js";
import { isUserAuthenticated } from "./middlewares/user/isAuthenticated.js";

router.post(
  "/cadastro",
  validateBodyRequest(userRegistrationSchema),
  checkIfEmailIsUnique("users"),
  userRegistration
);
router.post("/login", userValidateLogin, userLogin);

router.use(isUserAuthenticated);

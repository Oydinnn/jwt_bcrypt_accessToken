import express from "express"
import { Router } from "express";
import validationMiddleware from "../middleware/validation.middleware.js";
import usersControllers from "../controllers/users.controllers.js";

const router = express.Router()

router
  .post("/api/register", validationMiddleware, usersControllers.register)

export default router;

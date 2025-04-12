import { Router } from "express";
import type { Request, Response } from "express";
import { createUserController, findUsersController } from "../controllers/user";

const router = Router();

router.post("/", (request: Request, response: Response) =>
  createUserController.handle(request, response)
);

router.get("/find", (request: Request, response: Response) =>
  findUsersController.handle(request, response)
);

export default router;

import { Router } from "express";
import type { Request, Response } from "express";
import { createUserController, findUsersController, updateUserController } from "../controllers/user";

const router = Router();

router.post("/", (request: Request, response: Response) =>
  createUserController.handle(request, response)
);

router.get("/find", (request: Request, response: Response) =>
  findUsersController.handle(request, response)
);

router.put("/update", (request: Request, response: Response) =>
  updateUserController.handle(request, response)
);

export default router;

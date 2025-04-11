import { Router } from "express";
import type { Request, Response } from "express";
import { createUserController } from "../controllers/user";

const router = Router();

router.post("/", (request: Request, response: Response) =>
  createUserController.handle(request, response)
);

export default router;

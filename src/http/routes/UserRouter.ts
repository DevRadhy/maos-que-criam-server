import { Router } from "express";
import type { Request, Response } from "express";
import { createUserController } from "../controllers/user";

const router = Router();

router.post("/", async (request: Request, response: Response) => {
  await createUserController.handle(request, response);
});

export default router;

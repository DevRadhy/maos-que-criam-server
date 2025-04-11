import type { Request, Response } from "express";
import { CreateUserService } from "../../../services/user/CreateUserService";
import { AppError } from "../../../error/AppError";

export class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(request: Request, response: Response) {
    try {
      const { cpf, email, name, whatsapp, instagram, facebook } = request.body;

      const user = await this.createUserService.execute({
        cpf,
        email,
        name,
        whatsapp,
        instagram,
        facebook,
      });

      response.status(201).json(user);
    } catch (error) {
      if (error instanceof AppError) {
        response.status(error.status).json({
          status: error.status,
          message: error.message,
        });
      } else {
        response.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }
    }
  }
}

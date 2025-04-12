import type { Request, Response } from "express";
import { UpdateUserService } from "../../../services/user/UpdateUserService";
import { AppError } from "../../../error/AppError";

export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  async handle(request: Request, response: Response) {
    try {
      const { id, cpf, email, name, whatsapp, instagram, facebook } = request.body;

      const user = await this.updateUserService.execute({
        id,
        cpf,
        email,
        name,
        whatsapp,
        instagram,
        facebook,
      });

      response.status(200).json(user);
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
          error: error
        });
      }
    }
  }
}

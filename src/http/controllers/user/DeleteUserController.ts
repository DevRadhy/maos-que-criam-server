import type { Request, Response } from "express";
import { AppError } from "../../../error/AppError";
import { DeleteUserService } from "../../../services/user/DeleteUserService";

export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      await this.deleteUserService.execute(id);

      response.status(200).json({ message: "Usuário deletado com sucesso" });
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

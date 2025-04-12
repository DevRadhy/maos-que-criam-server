import type { Request, Response } from "express";
import { AppError } from "../../../error/AppError";
import { FindUsersService } from "../../../services/user/FindUsersService";

export class FindUsersController {
  constructor(private findUsersService: FindUsersService) {}

  async handle(_request: Request, response: Response) {
    try {
      const users = await this.findUsersService.execute();

      response.status(200).json(users);
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

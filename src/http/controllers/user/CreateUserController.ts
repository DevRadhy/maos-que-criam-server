import type { Request, Response } from "express";
import { CreateUserService } from "../../../services/user/CreateUserService";

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

      return response.status(201).json(user);
    } catch (error) {
      console.error(error);
      return response.status(400).json({ message: "Erro inesperado" });
    }
  }
}

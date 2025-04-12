import { AppError } from "../../error/AppError";
import { UserRepository } from "../../repositories/UserRepository";

export class DeleteUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string) {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new AppError("Usuário não encontrado", 404);
    }

    await this.userRepository.delete(id);

    return;
  }
}

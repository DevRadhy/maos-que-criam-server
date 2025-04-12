import { AppError } from "../../error/AppError";
import { UserRepository } from "../../repositories/UserRepository";

export class FindUsersService {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    const users = await this.userRepository.find();

    if (!users) {
      throw new AppError("Nenhum usuário encontrado", 404);
    }

    return users;
  }
}

import { AppError } from "../../error/AppError";
import User from "../../models/User";
import { UserRepository } from "../../repositories/UserRepository";

type UserProps = {
  id: string;
  email: string;
  name: string;
  cpf: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
};

export class UpdateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(props: UserProps) {
    const user = new User(props, props.id);

    const userExists = await this.userRepository.findById(user.id);

    if (!userExists) {
      throw new AppError("Usuário não encontrado", 404);
    }

    await this.userRepository.update(user);

    return user;
  }
}

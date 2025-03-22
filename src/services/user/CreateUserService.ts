import { AppError } from "../../error/AppError";
import User from "../../models/User";
import { UserRepository } from "../../repositories/UserRepository";

type UserProps = {
  email: string;
  name: string;
  cpf: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
};

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(props: UserProps) {
    const userAlreadyExistis = await this.userRepository.findByCPF(props.cpf);

    if (userAlreadyExistis) {
      throw new AppError("Usuário já existe");
    }

    const user = new User(props);

    await this.userRepository.create(user);

    return user;
  }
}

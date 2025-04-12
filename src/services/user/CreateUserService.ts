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
    const cpfAlreadyExistis = await this.userRepository.findByCPF(props.cpf);
    const emailAlreadyExistis = await this.userRepository.findByEmail(props.email);

    if (cpfAlreadyExistis) {
      throw new AppError("Já existe um usuário cadastrado com esse CPF");
    }

    if (emailAlreadyExistis) {
      throw new AppError("Já existe um usuário cadastrado com esse e-mail");
    }

    const user = new User(props);

    await this.userRepository.create(user);

    return user;
  }
}

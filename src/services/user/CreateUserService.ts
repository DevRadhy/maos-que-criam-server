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
    const cpfAlreadyExists = await this.userRepository.findByCPF(props.cpf);
    const emailAlreadyExists = await this.userRepository.findByEmail(props.email);

    if (cpfAlreadyExists) {
      throw new AppError("Já existe um usuário cadastrado com esse CPF");
    }

    if (emailAlreadyExists) {
      throw new AppError("Já existe um usuário cadastrado com esse e-mail");
    }

    const user = new User(props);

    await this.userRepository.create(user);

    return user;
  }
}

import User from "../models/User";

/**
 * @TODO encontrar usuários de forma paginada
 * atualizar dados de usuários
 */
export abstract class UserRepository {
  abstract findById(id: string): Promise<User>;
  abstract create(user: User): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findByCPF(cpf: string): Promise<User>;
}

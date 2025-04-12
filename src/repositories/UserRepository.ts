import User from "../models/User";

export abstract class UserRepository {
  abstract findById(id: string): Promise<User | null>;
  abstract create(user: User): Promise<void>;
  abstract update(user: User): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findByCPF(cpf: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract find(): Promise<User[] | null>;
}

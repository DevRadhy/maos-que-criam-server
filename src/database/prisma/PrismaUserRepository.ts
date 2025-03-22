import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../repositories/UserRepository";
import User from "../../models/User";
import { AppError } from "../../error/AppError";

export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({ where: { id } });

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    return new User(user, user.id);
  }

  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: user.id,
        ...user.props,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}

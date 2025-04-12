import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../repositories/UserRepository";
import User from "../../models/User";

export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({ where: { id } });

    if (!user) {
      return null;
    }

    return new User(user, user.id);
  }

  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        cpf: user.cpf,
        whatsapp: user.whatsapp,
        instagram: user.instagram,
        facebook: user.facebook,
      },
    });
  }

  async update(user: User): Promise<void> {
    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        email: user.email,
        name: user.name,
        cpf: user.cpf,
        whatsapp: user.whatsapp,
        instagram: user.instagram,
        facebook: user.facebook,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async findByCPF(cpf: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({ where: { cpf } });

    if (!user) {
      return null;
    }

    return new User(user, user.id);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user) {
      return null;
    }

    return new User(user, user.id);
  }

  async find(): Promise<User[] | null> {
    const users = await this.prisma.user.findMany();

    if (!users) {
      return null;
    }

    return users.map((user) => new User(user, user.id));
  }
}

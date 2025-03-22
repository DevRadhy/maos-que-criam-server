import { prismaUserRepository } from "../../database";
import { CreateUserService } from "./CreateUserService";

const createUserService = new CreateUserService(prismaUserRepository);

export { createUserService };

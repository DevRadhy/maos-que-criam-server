import { prismaUserRepository } from "../../database";
import { CreateUserService } from "./CreateUserService";
import { FindUsersService } from "./FindUsersService";

const createUserService = new CreateUserService(prismaUserRepository);
const findUsersService = new FindUsersService(prismaUserRepository);

export { createUserService, findUsersService };

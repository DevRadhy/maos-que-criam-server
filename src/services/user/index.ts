import { prismaUserRepository } from "../../database";
import { CreateUserService } from "./CreateUserService";
import { FindUsersService } from "./FindUsersService";
import { UpdateUserService } from "./UpdateUserService";

const createUserService = new CreateUserService(prismaUserRepository);
const findUsersService = new FindUsersService(prismaUserRepository);
const updateUserService = new UpdateUserService(prismaUserRepository);

export { createUserService, findUsersService, updateUserService };

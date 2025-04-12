import { prismaUserRepository } from "../../database";
import { CreateUserService } from "./CreateUserService";
import { DeleteUserService } from "./DeleteUserService";
import { FindUsersService } from "./FindUsersService";
import { UpdateUserService } from "./UpdateUserService";

const createUserService = new CreateUserService(prismaUserRepository);
const findUsersService = new FindUsersService(prismaUserRepository);
const updateUserService = new UpdateUserService(prismaUserRepository);
const deleteUserService = new DeleteUserService(prismaUserRepository);

export {
  createUserService,
  findUsersService,
  updateUserService,
  deleteUserService,
};

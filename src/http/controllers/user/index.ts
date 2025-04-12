import {
  createUserService,
  deleteUserService,
  findUsersService,
  updateUserService,
} from "../../../services/user";
import { CreateUserController } from "./CreateUserController";
import { DeleteUserController } from "./DeleteUserController";
import { FindUsersController } from "./FindUsersController";
import { UpdateUserController } from "./UpdateUserController";

const createUserController = new CreateUserController(createUserService);
const findUsersController = new FindUsersController(findUsersService);
const updateUserController = new UpdateUserController(updateUserService);
const deleteUserController = new DeleteUserController(deleteUserService);

export {
  createUserController,
  findUsersController,
  updateUserController,
  deleteUserController,
};

import {
  createUserService,
  findUsersService,
  updateUserService,
} from "../../../services/user";
import { CreateUserController } from "./CreateUserController";
import { FindUsersController } from "./FindUsersController";
import { UpdateUserController } from "./UpdateUserController";

const createUserController = new CreateUserController(createUserService);
const findUsersController = new FindUsersController(findUsersService);
const updateUserController = new UpdateUserController(updateUserService);

export { createUserController, findUsersController, updateUserController };

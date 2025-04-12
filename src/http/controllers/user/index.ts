import { createUserService, findUsersService } from "../../../services/user";
import { CreateUserController } from "./CreateUserController";
import { FindUsersController } from "./FindUsersController";

const createUserController = new CreateUserController(createUserService);
const findUsersController = new FindUsersController(findUsersService);

export { createUserController, findUsersController };

import { createUserService } from "../../../services/user";
import { CreateUserController } from "./CreateUserController";

const createUserController = new CreateUserController(createUserService);

export { createUserController };

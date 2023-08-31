import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserControler";
import { GetAllUsersController } from "../modules/movies/useCases/getAllUsers/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);

export { userRoutes };

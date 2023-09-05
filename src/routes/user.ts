import { Router } from "express";
import UserController from "../controllers/UserController";
const routes = Router();
routes.post("/", UserController.create);
//routes.get("/", UserController.list);
//routes.delete("/", UserController.delete);
//routes.put("/", UserController.update);
export default routes;

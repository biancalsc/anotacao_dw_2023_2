import { Router, Request, Response } from "express";
import controller from "../controllers/ColorController";

const routes = Router();

routes.get("/list", controller.list);
routes.get("/reset", controller.reset);
routes.get("/update/:idcolor", controller.update);

//aceita qualquer método HTTP ou URL
routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default routes;
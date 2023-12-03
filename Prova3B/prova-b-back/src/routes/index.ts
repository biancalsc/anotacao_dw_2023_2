/* 6 -
  Lembra das rotas que falamos nos passo 2? Aqui estão elas
  Resumindo, ele cria um caminho para você acessar cada função que vimos
  no arquivo anterior, vou dar desta que para alguns pontos importantes aqui, quando entender tudo siga
  para o txt novamente

  Obs: Vou colocar um "!!!" em pontos extremamente importantes
*/

import { Router, Request, Response } from "express";
// Aqui nos importamos o que permite que criemos as rotas
import controller from "../controllers/ColorController";

// Cria um objeto Router para definir as rotas relacionadas às cores
const routes = Router();

// Rota para listar todas as cores
routes.get("/list", controller.list);

// Rota para resetar a tabela de cores
routes.get("/reset", controller.reset);

// Rota para atualizar um registro de cor com base no ID
routes.get("/update/:idcolor", controller.update);

/*
!!!
Repare no .get no fim de cada routes, meu palplite é que o professor
não queria cobrar outros tipos de requisição, mas sempre observe qual é a requisição que se pede
e faça uso dela, quase sempre a maneira de se usar vai ser igual mas você vai precisar mudar 1 palavrinha
!!!

Os metodos de requisição quase sempre são:
get
post
put
delete

Quando você estiver no frontend você vai precisar colocar o mesmo tipo que está especificado aqui em routes,
nesse caso todos são get
*/

// Rota padrão para lidar com requisições desconhecidas
// Aceita qualquer método HTTP ou URL
routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

// Exporta o objeto Router contendo as rotas configuradas
export default routes;

/* 2 -
"Este documento é um arquivo utiliza o framework Express para criar um servidor web.
Em resumo, este código configura um servidor Express com manipulação de CORS, análise de JSON e rotas definidas externamente
em outros arquivos." - ChatGPT
Caso não tenha entendido a explicação do Chat, ele é o que faz o código ficar rodando sem parar e cria uma pagina http
para o mesmo

Tem algumas informações úteis aqui mas no geral você não vai precisar sequer tocar nessa parte, quando achar que tiven entendido
siga para ./data-source
*/

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
/*
Importa os módulos necessários:
- express para criar o http
- dotenv para lidar com variáveis de ambiente, tipo, coisas que só seu computador deveria ter acesso
- cors para configurar políticas de segurança de compartilhamento de recursos entre origens
Basicamente ele configura que ele aceita que outro http possam interagir com esse, isso é importantissimo
nessa prova
- e as rotas definidas em ./routes que explicaremos depois
*/
dotenv.config();
// Configurações do arquivo .env usando dotenv.config().

const PORT = process.env.PORT || 3000;
/*
Utiliza a porta que foi definida em .env
caso algo esteja errado ele vai rodar em 3000, esteja atenta a isso
*/

const app = express();
// Cria uma variavel do aplicativo Express.

app.use(cors());
// Configura que o http pode ser acessado a partir de outros.

app.use(express.json());
/*
Adiciona o middleware express.json() para analisar solicitações com corpo no formato JSON.
Resumindo, permite que você insira/edite informações ao BD
*/

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}...`));
/*
Inicia o servidor na porta especificada, exibindo uma mensagem no console quando o servidor estiver rodando.
Esteja atento aquela mensagem, nesse caso ele deve rodar em 3101, se caso algo dê errado vai ser 3000
*/

// define a rota para o pacote /routes
app.use(routes);
/*
Utiliza o middleware app.use(routes) para associar as rotas definidas em ./routes ao aplicativo.
Basicamente o que torna as rotas utilizaveis
*/
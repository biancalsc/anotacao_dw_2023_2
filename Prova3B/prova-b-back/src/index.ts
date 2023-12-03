import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors())
app.use(express.json());
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}...`));

// define a rota para o pacote /routes
app.use(routes);
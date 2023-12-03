/* 3 -
Mais um trecho que você não precisara mexer, Mas essa parte é o que cria o banco de dados basicamente

Agora vamos pra algo mais importante, siga para ./entities/Color.ts
*/

import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();
// Configura as variáveis de ambiente a partir do arquivo .env.

// Cria uma instância do DataSource para gerenciar a fonte de dados do banco de dados.
const AppDataSource = new DataSource({
  // Nome do banco de dados, obtido das variáveis de ambiente, com valor padrão "bdaula.db".
  database: process.env.DBNAME || "bdaula.db",

  // Tipo de banco de dados, neste caso, SQLite.
  type: "sqlite",

  // Define se o esquema do banco de dados deve ser criado a cada inicialização da aplicação.
  // Configurado como false para não recriar o esquema ao usar migrações.
  synchronize: false,

  // Define se as consultas e erros devem ser exibidos no terminal. Configurado como false para desativar o logging.
  logging: false,

  // Array de caminhos dos arquivos TypeScript que contêm as entidades convertidas em tabelas no banco de dados.
  entities: ["src/entities/*.ts"],

  // Array de caminhos dos arquivos TypeScript de migração.
  migrations: ["src/migrations/*.ts"],

  // Array vazio, pois nenhum subscriber está sendo definido aqui.
  subscribers: [],

  // Tempo máximo de execução de consulta em milissegundos, configurado como 2000 (2 segundos).
  maxQueryExecutionTime: 2000,
});

// Inicializa a instância do DataSource.
AppDataSource.initialize()
  .then(() => {
    // Exibe mensagem no console se a inicialização foi bem-sucedida.
    console.log("Data Source inicializado!");
  })
  .catch((e) => {
    // Exibe mensagem de erro no console se ocorreu algum problema durante a inicialização.
    console.error("Erro na inicialização do Data Source:", e);
  });

// Exporta a instância do DataSource para ser utilizada em outros módulos da aplicação.
export default AppDataSource;

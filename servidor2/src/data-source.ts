import { DataSource } from "typeorm";
//configuração para o SGBD PostgreSQL
const PgDataSource = new DataSource({
  database: "bdaula", // se for SQLite, então use o arquivo bdaula.db
  type: "postgres", // se for SQLite, então use sqlite
  host: "localhost", // não use esta propriedade se for sqlite
  port: 5432, // não use esta propriedade se for sqlite
  username: "postgres", // não use esta propriedade se for sqlite
  password: "123", // não use esta propriedade se for sqlite
  // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
  // deixe false ao usar migrations
  synchronize: false,
  logging: false, // true indica que as consultas e erros serão exibidas no terminal
  entities: ["src/entities/*.ts"], // entidades que serão convertidas em tabelas
  migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
});

PgDataSource.initialize()
  .then(() => {
    console.log("Data Source inicializado!");
  })
  .catch((e) => {
    console.error("Erro na inicialização do Data Source:", e);
  });
export default PgDataSource;

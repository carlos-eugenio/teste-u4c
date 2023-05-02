import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'protecaoVeicular',
    synchronize: false,
    logging: true,
    "entities": [
        "src/typeorm/**/*.ts"
    ],
    "migrations": [
         "src/typeorm/migrations/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
  });
  
  export default AppDataSource;
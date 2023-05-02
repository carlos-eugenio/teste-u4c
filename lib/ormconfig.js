"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
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
exports.default = AppDataSource;

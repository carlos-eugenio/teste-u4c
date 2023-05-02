"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ClientsRepository.ts
const typeorm_1 = require("typeorm");
const Client_1 = __importDefault(require("../entities/Client"));
class ClientsRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(Client_1.default);
    }
    async create({ name, email, cpf, type }) {
        const client = this.ormRepository.create({
            name,
            email,
            cpf,
            type
        });
        await this.ormRepository.save(client);
        return client;
    }
}
exports.default = ClientsRepository;

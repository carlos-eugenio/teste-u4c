"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// AccidentsRepository.ts
const typeorm_1 = require("typeorm");
const Accident_1 = __importDefault(require("../entities/Accident"));
class AccidentsRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(Accident_1.default);
    }
    async create({ idClient, idVehicle, description }) {
        const accident = this.ormRepository.create({
            idClient,
            idVehicle,
            description
        });
        await this.ormRepository.save(accident);
        return accident;
    }
}
exports.default = AccidentsRepository;

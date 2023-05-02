"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// VehiclesRepository.ts
const typeorm_1 = require("typeorm");
const Vehicle_1 = __importDefault(require("../entities/Vehicle"));
class VehiclesRepository {
    constructor() {
        this.ormRepository = (0, typeorm_1.getRepository)(Vehicle_1.default);
    }
    async create({ idClient, model, carPlate }) {
        const vehicle = this.ormRepository.create({
            idClient,
            model,
            carPlate
        });
        await this.ormRepository.save(vehicle);
        return vehicle;
    }
}
exports.default = VehiclesRepository;

// VehicleService.ts
import Vehicle from "../typeorm/entities/Vehicle";
import VehiclesRepository from "../repositories/VehiclesRepository";

type IRequest = {
  idClient: string;
  model: string;
  carPlate: string;
}

export class VehicleService {
  static getByCarPlate: any;
  static create: any;
  static delete: any;

  async getByCarPlate(carPlate: String): Promise<Vehicle> {
    return await VehiclesRepository.getByCarPlate(carPlate);
  }

  async create({ idClient, model, carPlate }: IRequest): Promise<Vehicle> {
    const vehicle = await VehiclesRepository.create({
      idClient,
      model,
      carPlate
    });

    return vehicle;
  }

  async delete({ carPlate }: IRequest): Promise<Vehicle> {
    return  await VehiclesRepository.delete({ carPlate });
  }
}
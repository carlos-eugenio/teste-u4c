// VehiclesRepository.tsVehicleDTO
import { Repository } from "typeorm";
import Vehicle from "../typeorm/entities/Vehicle";
import AppDataSource from "../ormconfig";

interface VehicleDTO {
  idClient: string;
  model: string;
  carPlate: string;
}

interface IVehiclesRepository {
  create(data: VehicleDTO): Promise<Vehicle>;
  getByCarPlate(data: VehicleDTO): Promise<Vehicle>;
  delete(data: VehicleDTO): Promise<Vehicle>;
}

class VehiclesRepository implements IVehiclesRepository {
  private ormRepository: Repository<Vehicle>;
  static create: any;
  static getByCarPlate: any;
  static delete: any;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Vehicle);
  }

  public async getByCarPlate({ carPlate }: VehicleDTO): Promise<any> {
    return this.ormRepository.findOneBy({ carPlate: carPlate });
  }

  public async create({ idClient, model, carPlate }: VehicleDTO): Promise<Vehicle> {
    const vehicle = this.ormRepository.create({
      idClient,
      model,
      carPlate
    });

    await this.ormRepository.save(vehicle);

    return vehicle;
  }

  public async delete({ carPlate }: VehicleDTO): Promise<any> {
    return await this.ormRepository.delete({ carPlate: carPlate });
  }
}

export default VehiclesRepository;
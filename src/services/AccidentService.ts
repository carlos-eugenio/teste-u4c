// AccidentService.ts
import Accident from "../typeorm/entities/Accident";
import AccidentsRepository from "../repositories/AccidentsRepository";
import VehiclesRepository from "../repositories/VehiclesRepository";
import ClientsRepository from "../repositories/ClientsRepository";

type IRequest = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  carPlate: string;
  model: string;
  description: string;
}

export class AccidentService {
  static create: any;
  static delete: any;

  async create({ name, email, cpf, carPlate, model, description }: IRequest): Promise<Accident> {
    let clientId = '';
    let vehicleId = '';

    const client = await ClientsRepository.getByDocument(cpf);
    const vehicle = await VehiclesRepository.getByCarPlate(carPlate);

    if(!client){
      const createdClient = await ClientsRepository.create(name, email, cpf);
      clientId = createdClient.id;
    } else {
      await ClientsRepository.update({ cpf:cpf, type:'cliente' })
    }

    if(!vehicle){
      const createdVehicle = await VehiclesRepository.create(carPlate, model);
      vehicleId = createdVehicle.id;
    }

    const accident = await AccidentsRepository.create({
      idClient: clientId ? clientId : client.id,
      idVehicle: vehicleId ? vehicleId: vehicle.id,
      description
    });

    return accident;
  }

  async delete({ id }: IRequest): Promise<Accident> {
    return  await AccidentsRepository.delete({ id });
  }
}
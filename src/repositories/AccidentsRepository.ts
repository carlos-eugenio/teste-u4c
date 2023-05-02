// AccidentsRepository.ts
import { Repository } from "typeorm";
import Accident from "../typeorm/entities/Accident";
import AppDataSource from "../ormconfig";

interface AccidentDTO {
  id: string;
  idClient: string;
  idVehicle: string;
  description: string;
}

interface IAccidentsRepository {
  create(data: AccidentDTO): Promise<Accident>;
  delete(data: AccidentDTO): Promise<Accident>;
}

class AccidentsRepository implements IAccidentsRepository {
  private ormRepository: Repository<Accident>;
  static create: any;
  static delete: any;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Accident);
  }

  public async create({ idClient, idVehicle, description }: AccidentDTO): Promise<Accident> {
    const accident = this.ormRepository.create({
      idClient,
      idVehicle,
      description
    });

    await this.ormRepository.save(accident);

    return accident;
  }

  public async delete({ id }: AccidentDTO): Promise<any> {
    return await this.ormRepository.delete({ id: id });
  }
}

export default AccidentsRepository;
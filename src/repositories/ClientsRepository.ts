// ClientsRepository.ts
import { Repository } from "typeorm";
import Client from "../typeorm/entities/Client";
import AppDataSource from "../ormconfig";

interface ClientDTO {
  name: string;
  email: string;
  cpf: string;
  type: string;
}

interface IClientsRepository {
  create(data: ClientDTO): Promise<Client>;
  get(): Promise<any>;
  getByDocument(data: ClientDTO): Promise<Client>;
  update(data: ClientDTO): Promise<Client>;
  delete(data: ClientDTO): Promise<any>;
}

class ClientsRepository implements IClientsRepository {
  private ormRepository: Repository<Client>;
  static create: any;
  static get: any;
  static getByDocument: any;
  static update: any;
  static delete: any;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Client);
  }

  public async get(): Promise<any> {
    return await this.ormRepository.find();
  }

  public async getByDocument({ cpf }: ClientDTO): Promise<Client> {
    return this.ormRepository.findOneBy({ cpf: cpf });
  }

  public async create({ name, email, cpf, type }: ClientDTO): Promise<Client> {
    const client = this.ormRepository.create({
      name,
      email,
      cpf,
      type
    });

    await this.ormRepository.save(client);

    return client;
  }

  public async update({ cpf, name, email, type }: ClientDTO): Promise<Client> {
    const client = await this.ormRepository.save({
      cpf: cpf,
      name,
      email,
      type
    });

    return client;
  }

  public async delete({ cpf }: ClientDTO): Promise<any> {
    return await this.ormRepository.delete({ cpf: cpf });
  }
}

export default ClientsRepository;
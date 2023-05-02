// ClientService.ts
import Client from "../typeorm/entities/Client";
import ClientsRepository from "../repositories/ClientsRepository";

type IRequest = {
  name: string;
  email: string;
  cpf: string;
  type: string;
}

export class ClientService {
  static create: any;
  static get: any;
  static getByDocument: any;
  static update: any;
  static delete: any;

  async get(): Promise<Client> {
    return await ClientsRepository.get();
  }

  async getByDocument(cpf: String): Promise<Client> {
    return await ClientsRepository.getByDocument(cpf);
  }

  async create({ name, email, cpf }: IRequest): Promise<Client> {
    let clientType = 'terceiro';
    const client = await this.getByDocument(cpf);

    if(client) {
      clientType = 'cliente';
    }

    const clientCreated = await ClientsRepository.create({
      name,
      email,
      cpf,
      type: clientType
    });

    return clientCreated;
  }

  async update({ cpf, name, email, type }: IRequest): Promise<Client> {
    const client = await ClientsRepository.update({
      name,
      email,
      cpf,
      type
    });

    return client;
  }

  async delete({ cpf }: IRequest): Promise<Client> {
    return  await ClientsRepository.delete({ cpf });
  }
}
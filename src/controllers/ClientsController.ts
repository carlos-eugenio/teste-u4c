// ProductsController.ts
import { Request, ResponseToolkit, ResponseObject, ServerRoute } from "@hapi/hapi";
import { ClientService } from "../services/ClientService";

export default class ClientsController {
  public async get(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const client = await ClientService.get();
    const response = h.response(client);
    return response;
  }

  public async getByDocument(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const { cpf } = request.params;

    const client = await ClientService.getByDocument(cpf);
    const response = h.response(client);
    return response;
  }

  public async create(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const { name, email, cpf } = request.payload;

    const client = await ClientService.create({
      name,
      email,
      cpf
    });

    const response = h.response(client);
    return response;
  }

  public async update(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const { cpf } = request.params;
    const { name, email, type } = request.payload;

    const client = await ClientService.update({ cpf, name, email, type });

    const response = h.response(client);
    return response;
  }

  public async delete(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const { cpf } = request.params;

    const client = await ClientService.delete({ cpf });

    const response = h.response(client);
    return response;
  }

}
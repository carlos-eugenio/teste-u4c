// ProductsController.ts
import { Request, ResponseToolkit, ResponseObject, ServerRoute } from "@hapi/hapi";
import { AccidentService } from "../services/AccidentService";

export default class AccidentsController {
  public async create(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const { name, email, cpf, carPlate, model, description } = request.payload;

    const accident = await AccidentService.create({
      name,
      email,
      cpf,
      carPlate,
      model,
      description
    });

    const response = h.response(accident);
    return response;
  }

  public async delete(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const { id } = request.params;

    const accident = await AccidentService.delete({ id });

    const response = h.response(accident);
    return response;
  }

}
// VehiclesController.ts
import { Request, ResponseToolkit, ResponseObject, ServerRoute } from "@hapi/hapi";
import { VehicleService } from "../services/VehicleService";

export default class VehiclesController {
  public async getByClientId(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const { idClient } = request.params;

    const vehicle = await VehicleService.getByClientId(idClient);
    const response = h.response(vehicle);
    return response;
  }

  public async create(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const { idClient, model, carPlate } = request.payload;

    const vehicle = await VehicleService.create({
      idClient,
      model,
      carPlate
    });

    const response = h.response(vehicle);
    return response;
  }

  public async delete(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
    const { carPlate } = request.params;

    const client = await VehicleService.delete({ carPlate });

    const response = h.response(client);
    return response;
  }

}
import { Request, ResponseToolkit, ResponseObject, ServerRoute } from "@hapi/hapi";

async function sayHello(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
  const name: string = request.params.cpf || "World";
  const response = h.response("Hello " + name);
  response.header('X-Custom', 'some-value');
  return response;
}

export const accidentRoutes: ServerRoute[] = [
  {
    method: "GET",
    path: "/sinistros/{cpf}",
    handler: sayHello
  },
  {
    method: "GET",
    path: "/sinistro/{id}",
    handler: sayHello
  }
];
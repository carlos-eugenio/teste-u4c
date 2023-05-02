import { Request, ResponseToolkit, ResponseObject, ServerRoute } from "@hapi/hapi";

async function sayHello(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
  const name: string = request.params.name || "World";
  const response = h.response("Hello " + name);
  response.header('X-Custom', 'some-value');
  return response;
}

export const clientRoutes: ServerRoute[] = [
  {
    method: "GET",
    path: "/clientes",
    handler: sayHello
  },
  {
    method: "GET",
    path: "/cliente/{name}",
    handler: sayHello
  }
];
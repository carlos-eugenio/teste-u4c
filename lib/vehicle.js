"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleRoutes = void 0;
async function sayHello(request, h) {
    const name = request.params.cpf || "World";
    const response = h.response("Hello " + name);
    response.header('X-Custom', 'some-value');
    return response;
}
exports.vehicleRoutes = [
    {
        method: "GET",
        path: "/veiculos/{cpf}",
        handler: sayHello
    },
    {
        method: "GET",
        path: "/veiculo/{id}",
        handler: sayHello
    }
];

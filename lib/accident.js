"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accidentRoutes = void 0;
async function sayHello(request, h) {
    const name = request.params.cpf || "World";
    const response = h.response("Hello " + name);
    response.header('X-Custom', 'some-value');
    return response;
}
exports.accidentRoutes = [
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

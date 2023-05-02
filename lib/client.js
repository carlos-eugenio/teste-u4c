"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRoutes = void 0;
async function sayHello(request, h) {
    const name = request.params.name || "World";
    const response = h.response("Hello " + name);
    response.header('X-Custom', 'some-value');
    return response;
}
exports.clientRoutes = [
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

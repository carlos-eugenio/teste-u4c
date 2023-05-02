'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.init = exports.server = void 0;
const hapi_1 = __importDefault(require("@hapi/hapi"));
require("reflect-metadata");
const client_1 = require("./client");
const vehicle_1 = require("./vehicle");
const accident_1 = require("./accident");
const init = async function () {
    exports.server = hapi_1.default.server({
        port: 3000,
        host: "localhost"
    });
    exports.server.route(client_1.clientRoutes);
    exports.server.route(vehicle_1.vehicleRoutes);
    exports.server.route(accident_1.accidentRoutes);
    return exports.server;
};
exports.init = init;
const start = async function () {
    console.log(`Listening on ${exports.server.settings.host}:${exports.server.settings.port}`);
    return exports.server.start();
};
exports.start = start;
process.on('unhandledRejection', (err) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});

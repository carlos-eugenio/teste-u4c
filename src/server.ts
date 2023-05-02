'use strict';

import Hapi from "@hapi/hapi";
import 'reflect-metadata';
import { Server } from "@hapi/hapi";
import { clientRoutes } from "./client";
import { vehicleRoutes } from "./vehicle";
import { accidentRoutes } from "./accident";

export let server: Server;

export const init = async function(): Promise<Server> {
    server = Hapi.server({
        port: 3000,
        host: "localhost"
    });

    server.route(clientRoutes);
    server.route(vehicleRoutes);
    server.route(accidentRoutes);

    return server;
};

export const start = async function (): Promise<void> {
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    return server.start();
};

process.on('unhandledRejection', (err) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});
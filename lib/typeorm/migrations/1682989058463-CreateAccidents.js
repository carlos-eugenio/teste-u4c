"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccidents1682989058463 = void 0;
const typeorm_1 = require("typeorm");
class CreateAccidents1682989058463 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'accidents',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'idClient',
                    type: 'uuid',
                },
                {
                    name: 'idVehicle',
                    type: 'uuid',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('accidents');
    }
}
exports.CreateAccidents1682989058463 = CreateAccidents1682989058463;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVehicles1682988847735 = void 0;
const typeorm_1 = require("typeorm");
class CreateVehicles1682988847735 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'vehicles',
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
                    name: 'model',
                    type: 'varchar',
                },
                {
                    name: 'carPlate',
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
        await queryRunner.dropTable('vehicles');
    }
}
exports.CreateVehicles1682988847735 = CreateVehicles1682988847735;

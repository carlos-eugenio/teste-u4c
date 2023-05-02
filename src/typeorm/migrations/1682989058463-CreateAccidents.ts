import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAccidents1682989058463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('accidents')
    }

}

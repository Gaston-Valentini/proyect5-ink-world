import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1699989447248 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "surname",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "255",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "phone",
                        type: "int",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "255",
                        default: "''"
                    },
                    {
                        name: "style",
                        type: "varchar",
                        length: "255",
                        default: "''",
                    },
                    {
                        name: "image",
                        type: "varchar",
                        length: "2084",
                        default: "''",
                    },
                    {
                        name: "role",
                        type: "varchar",
                        default: "'client'",
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}

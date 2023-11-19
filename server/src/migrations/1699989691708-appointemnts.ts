import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Appointemnts1699989691708 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "appointments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "clientId",
                        type: "int",
                    },
                    {
                        name: "tattooArtistId",
                        type: "int",
                    },
                    {
                        name: "name",
                        type: "text",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "1000",
                    },
                    {
                        name: "date",
                        type: "timestamp",
                    },
                    {
                        name: "type",
                        type: "enum",
                        enum: ["tattoo", "piercing"],
                    },
                    {
                        name: "style",
                        type: "varchar",
                        length: "255",
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["clientId"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["tattooArtistId"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments");
    }
}

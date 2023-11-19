import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Styles1700128787117 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "styles",
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
                        name: "text",
                        type: "varchar",
                        length: "1000",
                    },
                    {
                        name: "image",
                        type: "varchar",
                        length: "1000",
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("styles");
    }
}

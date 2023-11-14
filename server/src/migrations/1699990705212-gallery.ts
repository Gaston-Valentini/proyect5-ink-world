import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Gallery1699990705212 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "gallery",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "tattooArtistId",
                        type: "int",
                    },
                    {
                        name: "image",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "style",
                        type: "varchar",
                        length: "255",
                    },
                ],
                foreignKeys: [
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
        await queryRunner.dropTable("gallery");
    }
}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointemnts1699989691708 = void 0;
const typeorm_1 = require("typeorm");
class Appointemnts1699989691708 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
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
            }), true);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("appointments");
        });
    }
}
exports.Appointemnts1699989691708 = Appointemnts1699989691708;

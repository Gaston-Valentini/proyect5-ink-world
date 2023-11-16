"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const app_1 = __importDefault(require("../app/app"));
const _1699989447248_users_1 = require("../migrations/1699989447248-users");
const _1699989691708_appointemnts_1 = require("../migrations/1699989691708-appointemnts");
const _1699990705212_gallery_1 = require("../migrations/1699990705212-gallery");
const _1700128787117_style_1 = require("../migrations/1700128787117-style");
const User_1 = require("../entities/User");
const Appointment_1 = require("../entities/Appointment");
const Gallery_1 = require("../entities/Gallery");
const Style_1 = require("../entities/Style");
const database = new typeorm_1.DataSource({
    type: "mysql",
    host: app_1.default.get("DB_HOST"),
    port: app_1.default.get("DB_PORT"),
    username: app_1.default.get("DB_USERNAME"),
    password: app_1.default.get("DB_PASSWORD"),
    database: app_1.default.get("DB_NAME"),
    entities: [User_1.User, Appointment_1.Appointment, Gallery_1.Gallery, Style_1.Style],
    migrations: [
        _1699989447248_users_1.Users1699989447248,
        _1699989691708_appointemnts_1.Appointemnts1699989691708,
        _1699990705212_gallery_1.Gallery1699990705212,
        _1700128787117_style_1.Styles1700128787117,
    ],
    logging: false,
    synchronize: true,
});
exports.default = database;

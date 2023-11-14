import "reflect-metadata";
import { DataSource } from "typeorm";
import app from "../app/app";

import { Users1699989447248 } from "../migrations/1699989447248-users";
import { Appointemnts1699989691708 } from "../migrations/1699989691708-appointemnts";
import { Gallery1699990705212 } from "../migrations/1699990705212-gallery";
import { User } from "../entities/User"

const database = new DataSource({
    type: "mysql",
    host: app.get("DB_HOST"),
    port: app.get("DB_PORT"),
    username: app.get("DB_USERNAME"),
    password: app.get("DB_PASSWORD"),
    database: app.get("DB_NAME"),
    entities: [User],
    migrations: [
        Users1699989447248,
        Appointemnts1699989691708,
        Gallery1699990705212
    ],
    logging: false,
    synchronize: true,
});

export default database;

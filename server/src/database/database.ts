import "reflect-metadata";
import { DataSource } from "typeorm";
import app from "../app/app";

import { Users1699989447248 } from "../migrations/1699989447248-users";

const database = new DataSource({
    type: "mysql",
    host: app.get("DB_HOST"),
    port: app.get("DB_PORT"),
    username: app.get("DB_USERNAME"),
    password: app.get("DB_PASSWORD"),
    database: app.get("DB_NAME"),
    entities: [],
    migrations: [
        Users1699989447248
    ],
    logging: false,
    synchronize: true,
});

export default database;

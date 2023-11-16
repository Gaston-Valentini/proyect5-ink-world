import "reflect-metadata";
import { DataSource } from "typeorm";
import app from "../app/app";

import { Users1699989447248 } from "../migrations/1699989447248-users";
import { Appointemnts1699989691708 } from "../migrations/1699989691708-appointemnts";
import { Gallery1699990705212 } from "../migrations/1699990705212-gallery";
import { Styles1700128787117 } from "../migrations/1700128787117-style";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Gallery } from "../entities/Gallery";
import { Style } from "../entities/Style";

const database = new DataSource({
    type: "mysql",
    host: app.get("DB_HOST"),
    port: app.get("DB_PORT"),
    username: app.get("DB_USERNAME"),
    password: app.get("DB_PASSWORD"),
    database: app.get("DB_NAME"),
    entities: [User, Appointment, Gallery, Style],
    migrations: [
        Users1699989447248,
        Appointemnts1699989691708,
        Gallery1699990705212,
        Styles1700128787117,
    ],
    logging: false,
    synchronize: true,
});

export default database;

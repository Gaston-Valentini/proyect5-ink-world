import app from "./app/app";
import database from "./database/database";

const startServer = async () => {
    try {
        await database.initialize();
        console.log("Connected to database");
        app.listen(app.get("SERVER_PORT"));
        console.log(`Server listening on port ${app.get("SERVER_PORT")}`);
    } catch (error) {
        console.log(error);
    }
};

startServer();

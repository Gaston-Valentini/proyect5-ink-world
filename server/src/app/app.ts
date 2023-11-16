// Imports
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import authRouter from "../views/authRouter";
import userRouter from "../views/userRouter";
import styleRouter from "../views/styleRouter";
import galleryRoter from "../views/galleryRouter";

// Settings
app.set("SERVER_PORT", process.env.SERVER_PORT);
app.set("DB_HOST", process.env.DB_HOST);
app.set("DB_PORT", process.env.DB_PORT);
app.set("DB_USERNAME", process.env.DB_USERNAME);
app.set("DB_PASSWORD", process.env.DB_PASSWORD);
app.set("DB_NAME", process.env.DB_NAME);

// Middleware
app.use(express.json());
app.use(cors());

// Router
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/styles", styleRouter);
app.use("/gallery", galleryRoter);

// Export
export default app;

import { Router } from "express";
import { getUser } from "../controllers/userController";

const router = Router();

router.get("/getUser/:id", getUser);

export default router;

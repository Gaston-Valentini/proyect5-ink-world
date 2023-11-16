import { Router } from "express";
import { getStyles } from "../controllers/styleController";

const router = Router();

router.get("/", getStyles);

export default router;

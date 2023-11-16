import { Router } from "express";
import { getStyles, getOneStyle } from "../controllers/styleController";

const router = Router();

router.get("/", getStyles);
router.get("/:name", getOneStyle);

export default router;

import { Router } from "express";
import { getUser, getTattooArtists } from "../controllers/userController";

const router = Router();

router.get("/getUser/:id", getUser);
router.get("/getTattooArtists", getTattooArtists)

export default router;

import { Router } from "express";
import {
    getUser,
    getTattooArtists,
    updateUser,
} from "../controllers/userController";

const router = Router();

router.get("/getUser/:id", getUser);
router.get("/getTattooArtists", getTattooArtists);
router.post("/updateProfile/:id", updateUser);

export default router;

import { Router } from "express";
import {
    getUser,
    getTattooArtists,
    updateUser,
    deleteUser,
    getAllUsers,
} from "../controllers/userController";

const router = Router();

router.get("/getUser/:id", getUser);
router.get("/getTattooArtists", getTattooArtists);
router.post("/updateProfile/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
router.get("/getAllUsers", getAllUsers);

export default router;

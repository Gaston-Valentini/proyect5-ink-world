import { Router } from "express";
import {
    makeAppointment,
    getMyAppointmentsClient,
} from "../controllers/appointmentController";

const router = Router();

router.post("/makeAppointment", makeAppointment);
router.get("/getMyAppointmentsClient/:id", getMyAppointmentsClient);

export default router;

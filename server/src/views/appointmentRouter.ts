import { Router } from "express";
import {
    makeAppointment,
    getMyAppointmentsClient,
    getMyAppointmentsTattooArtist,
    cancelAppointment,
} from "../controllers/appointmentController";

const router = Router();

router.post("/makeAppointment", makeAppointment);
router.get("/getMyAppointmentsClient/:id", getMyAppointmentsClient);
router.get("/getMyAppointmentsTattooArtist/:id", getMyAppointmentsTattooArtist);
router.delete("/cancelAppointment/:id", cancelAppointment);

export default router;

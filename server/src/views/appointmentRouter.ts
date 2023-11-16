import { Router } from "express";
import { makeAppointment } from "../controllers/appointmentController";

const router = Router();

router.post("/makeAppointment", makeAppointment);

export default router;

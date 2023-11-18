"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
const router = (0, express_1.Router)();
router.post("/makeAppointment", appointmentController_1.makeAppointment);
router.get("/getMyAppointmentsClient/:id", appointmentController_1.getMyAppointmentsClient);
exports.default = router;

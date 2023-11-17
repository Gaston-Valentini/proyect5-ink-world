"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyAppointmentsClient = exports.makeAppointment = void 0;
const Appointment_1 = require("../entities/Appointment");
const User_1 = require("../entities/User");
const makeAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tattooArtist = yield User_1.User.findOne({
        where: { name: req.body.tattooArtist },
    });
    const newApp = Appointment_1.Appointment.create(Object.assign(Object.assign({}, req.body), { tattooArtistId: tattooArtist === null || tattooArtist === void 0 ? void 0 : tattooArtist.id })).save();
    try {
        return res.json({
            success: true,
            message: "Cita agendada.",
            newApp,
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.makeAppointment = makeAppointment;
const getMyAppointmentsClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.body.id;
    const appointments = yield Appointment_1.Appointment.find({
        where: { clientId: userId },
    });
    return res.json({
        success: true,
        appointments,
    });
});
exports.getMyAppointmentsClient = getMyAppointmentsClient;

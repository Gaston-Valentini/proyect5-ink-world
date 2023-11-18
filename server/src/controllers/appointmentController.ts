import { Request, Response } from "express";

import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

const makeAppointment = async (req: Request, res: Response) => {
    const tattooArtist = await User.findOne({
        where: { name: req.body.tattooArtist },
    });

    const newApp = Appointment.create({
        ...req.body,
        tattooArtistId: tattooArtist?.id,
    }).save();

    try {
        return res.json({
            success: true,
            message: "Cita agendada.",
            newApp,
        });
    } catch (error) {
        console.error(error);
    }
};

const getMyAppointmentsClient = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);

    const appointments = await Appointment.find({
        where: { clientId: userId },
    });

    return res.json({
        success: true,
        appointments,
    });
};

export { makeAppointment, getMyAppointmentsClient };

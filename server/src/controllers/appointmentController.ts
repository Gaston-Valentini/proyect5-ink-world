import { Request, Response } from "express";

import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

const makeAppointment = async (req: Request, res: Response) => {
    const tattooArtist = await User.findOne({
        where: { name: req.body.tattooArtist },
    });

    const newApp = Appointment.create({
        ...req.body,
        clientId: 3,
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

export { makeAppointment };

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../entities/User";

const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const userFound = await User.findOne({ where: { email } });

    if (userFound) {
        return res.status(400).json({
            success: false,
            message:
                "Ya existe un usuario registrado con ese correo electrónico.",
        });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    User.create({ ...req.body, password: hashedPassword }).save();

    return res.status(200).json({
        success: true,
        message: "Usuario registrado correctamente.",
    });
};

export { register };

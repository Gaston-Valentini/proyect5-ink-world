import { Request, Response } from "express";

import { User } from "../entities/User";

const getUser = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)

        const userFound = await User.findOne({ where: { id } });

        return res.json({
            success: true,
            userFound,
        });
    } catch (error) {
        console.error(error)
    }
};

export { getUser }
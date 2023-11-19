import { Request, Response } from "express";

import { User } from "../entities/User";

const getUser = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);

        const userFound = await User.findOne({ where: { id } });

        return res.json({
            success: true,
            userFound,
        });
    } catch (error) {
        console.error(error);
    }
};

const getTattooArtists = async (req: Request, res: Response) => {
    try {
        const tattooArtists = await User.find({
            where: { role: "tattooArtist" },
        });

        return res.json({
            success: true,
            tattooArtists,
        });
    } catch (error) {
        console.error(error);
    }
};

const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        User.update({ id }, req.body);

        return res.json({
            success: true,
            message: "Usuario actualizado.",
        });
    } catch (error) {
        console.error(error);
    }
};

const deleteUser = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);

    const userToDelete = await User.findOne({ where: { id: userId } });

    User.delete(userToDelete!.id);

    return res.json({
        success: true,
        message: "Usuario Eliminado",
    });
};

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();

        return res.json({
            success: true,
            users,
        });
    } catch (error) {
        console.error(error);
    }
};

export { getUser, getTattooArtists, updateUser, getAllUsers, deleteUser };

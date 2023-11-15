import { Request, Response } from "express";

import { Gallery } from "../entities/Gallery";

const getGallery = async (req: Request, res: Response) => {
    const gallery = await Gallery.find();

    return res.json({ gallery });
};

export { getGallery };

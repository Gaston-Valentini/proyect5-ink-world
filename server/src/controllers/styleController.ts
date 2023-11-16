import { Request, Response } from "express";

import { Style } from "../entities/Style";

const getStyles = async (req: Request, res: Response) => {
    try {
        const styles = await Style.find();

        return res.status(200).json({
            styles,
        });
    } catch (error) {
        console.error(error);
    }
};

export { getStyles };

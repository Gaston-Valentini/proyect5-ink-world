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

const getOneStyle = async (req: Request, res: Response) => {
    const name = req.params.name;

    try {
        const style = await Style.findOne({ where: { name } });

        return res.status(200).json({
            style,
        });
    } catch (error) {
        console.error(error);
    }
};

export { getStyles, getOneStyle };

import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";


export const checkData = (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = validationResult(req)
        if (!result.isEmpty()) {
            res.status(400).json({ message: result.array().map(error => error.msg) });
            return;
        } else {
            next();
        }
    } catch (err) {
        res.status(500).send('An error occurred');
    }
};
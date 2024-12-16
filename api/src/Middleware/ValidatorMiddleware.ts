import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";


export const checkData = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
        res.status(400).json({ message: result.array().map(error => error.msg) });
        return;
    }
    next();
};
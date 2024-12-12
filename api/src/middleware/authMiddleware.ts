import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

interface CustomRequest extends Request {
    userId?: string;
}

export const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Accès non autorisé : pas de token fourni.' });
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;
        (req as CustomRequest).userId = decoded.userId; // Injecte userId dans la requête
        next();
    } catch (err) {
        res.clearCookie('token');
        res.status(401).json({ message: 'Token invalide ou expiré.' });
    }
};

import {NextFunction, Request, Response} from "express";
import * as jwt from 'jsonwebtoken';
import {JwtPayload} from "jsonwebtoken";

interface CustomRequest extends Request {
    userId?: string;
}

const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({message: 'Accès non autorisé : pas de token fourni.'});
    }

    try {
        const decoded: JwtPayload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        req.userId = decoded.userId; // Injecte userId dans la requête
        next();
    } catch (err) {
        res.clearCookie('token');
        return res.status(401).json({message: 'Token invalide ou expiré.'});
    }
};

module.exports = verifyToken;

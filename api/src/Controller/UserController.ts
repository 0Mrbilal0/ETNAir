import { Request, Response } from 'express';

async function getAllUsers(req: Request, res: Response ) {
    res.json({message: "All Users"})
}

async function GetUserById(req: Request, res: Response ) {
    res.json({message: req.params.id})
}

async function getAllAdverts(req: Request, res: Response ) {
    res.json({message: "All Adverts"})
}

async function getAdvertsById(req: Request, res: Response ) {
    res.json({message: req.params.id})
}

export { getAllUsers, GetUserById, getAllAdverts, getAdvertsById }
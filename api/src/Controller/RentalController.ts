import {Request, Response} from 'express';
import {PrismaClient, Advert, Prisma} from "../Models/generated/prisma-client-js";
import logger from "../../logger";

const prisma = new PrismaClient()

/**
 * Get all rentals
 * @param req: Request
 * @param res: Response
 */
async function getAllRentals(req: Request, res: Response) {
    try {
        const allRentals: Advert[] = await prisma.advert.findMany();
        if (allRentals === undefined) res.status(404).json({message: "Rentals Not Found"});
        res.status(200).json(allRentals)
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({message: "Bad Request"});
        }
        res.status(500).json({message: "Internal Server Error"});
    }
}

/**
 * Get advert by id
 * @param req: Request
 * @param res: Response
 */
async function getRentalsById(req: Request, res: Response) {
    const id = req.params.id;
    if (isNaN(parseInt(id))) res.status(400).json({message: "Bad Request"});
    const rental = await prisma.advert.findUnique({
        where: {id: parseInt(id)}
    });
    if (rental === undefined) res.status(404).json({message: "Rental Not Found"});
    res.status(200).json(rental)
};

/**
 * Create a new rental
 * @param req: Request
 * @param res: Response
 */
async function createRental(req: Request, res: Response) {
    console.log(req.body);
    const newRental: Advert = await prisma.advert.create({
        data: req.body
    });
    logger.info(newRental);
    res.status(201).json({message: "Rental created"});
}

/**
 * Update rental's informations by id
 * @param req: Request
 * @param res: Response
 */
async function updateRentalById(req: Request, res: Response) {
    if (isNaN(parseInt(req.params.id))) res.status(400).json({message: "Bad Request"});
    const rentalId: number = Number(req.params.id);
    const rental = await prisma.advert.update({
        where: {id: rentalId},
        data: req.body
    });
    if (rental === undefined) res.status(404).json({message: "Rental Not Found"});
    logger.info(rental);
    res.status(200).json({message: "Rental Updated"});
};

/**
 * Delete rental by id
 * @param req: Request
 * @param res: Response
 */
async function deleteRentalById(req: Request, res: Response) {
    if (isNaN(parseInt(req.params.id))) res.status(400).json({message: "Bad Request"});
    const rentalId: number = Number(req.params.id);
    const rental = await prisma.advert.delete({
        where: {id: rentalId}
    });
    if (rental === undefined) res.status(404).json({message: "Rental Not Found"});
    logger.info(rental);
    res.status(204).json({message: "Rental Deleted"});
};

export {getAllRentals, getRentalsById, createRental, updateRentalById, deleteRentalById}

import {Request, Response} from 'express';
import {PrismaClient, Rental, Prisma, Address, Caracteristic} from "../Models/generated/prisma-client-js";
import logger from "../../logger";

const prisma = new PrismaClient()

/**
 * Get all rentals
 * @param req
 * @param res
 */
async function getAllRentals(req: Request, res: Response) {
    try {
        const createRental: Rental[] = await prisma.rental.findMany({
            relationLoadStrategy: "join",
            include: {
                caracteristic: true,
                address: true
            }
        });
        if (createRental === undefined) res.status(404).json({message: "Rentals Not Found"});
        res.status(200).json(createRental)
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({message: "Bad Request"});
        }
        res.status(500).json({message: "Internal Server Error"});
    }
}

/**
 * Create a new rental
 * @param req
 * @param res
 */
async function createRental(req: Request, res: Response) {
    const rental: Rental = req.body.rental;
    const address: Address = req.body.adress;
    const caracteristic: Caracteristic = req.body.caracteristic;
    const caracteristicId: {id: string} = await prisma.caracteristic.create({
       data: caracteristic
    });
    const addressId: {id: string} = await prisma.address.create({
      data: address
    });
    const newRental: Rental = await prisma.rental.create({
        data: {
            ...rental,
            caracteristicId: caracteristicId.id,
            adressId: addressId.id
        }
    });

    logger.info(newRental);
    res.status(201).json({message: "Rental created"});
}

/**
 * Get rental by id
 * @param req
 * @param res
 */
async function getRentalsById(req: Request, res: Response) {
    const id = req.params.id;
    const rental = await prisma.rental.findUnique({
        where: {id: id}
    });
    if (rental === undefined) res.status(404).json({message: "Rental Not Found"});
    res.status(200).json(rental)
}

/**
 * Update rental's informations by id
 * @param req
 * @param res
 */
async function updateRentalById(req: Request, res: Response) {
    const rentalId: string = String(req.params.id);
    const rental = await prisma.rental.update({
        where: {id: rentalId},
        data: req.body
    });
    if (rental === undefined) res.status(404).json({message: "Rental Not Found"});
    logger.info(rental);
    res.status(200).json({message: "Rental Updated"});
};

/**
 * Delete rental by id
 * @param req
 * @param res
 */
async function deleteRentalById(req: Request, res: Response) {
    if (isNaN(parseInt(req.params.id))) res.status(400).json({message: "Bad Request"});
    const rentalId: string = String(req.params.id);
    const rental = await prisma.rental.delete({
        where: {id: rentalId}
    });
    if (rental === undefined) res.status(404).json({message: "Rental Not Found"});
    logger.info(rental);
    res.status(204).json({message: "Rental Deleted"});
};

export {getAllRentals, createRental, getRentalsById, updateRentalById, deleteRentalById}

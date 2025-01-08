import {Request, Response} from 'express';
import {PrismaClient, Rental, Prisma, Address, Caracteristic} from "../Models/generated/prisma-client-js";
import logger from "../../logger";

const prisma = new PrismaClient()

interface CustomRequest extends Request {
    userId?: string;
}

/**
 * Get all rentals from the database
 * @param req: Request
 * @param res: Response
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
            res.status(400).json({ message: "Bad Request" });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
}

/**
 * Give informations about a rental by its id
 * @param req: Request
 * @param res: Response
 */
async function getRentalsById(req: Request, res: Response) {
    try {
        // Get the id from the request parameters
        const id = req.params.id;

        // Check if the rental exists
        const rental = await prisma.rental.findUnique({ 
            where: { id: id },
            include: {
                caracteristic: true,
                address: true,
            }
        });
        if (rental === null) {
            res.status(404).json({ message: "Rental Not Found" });
            return;
        }

        // If the rental is found, send it to the client
        res.status(200).json(rental);
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({ message: "Bad Request" });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }

};

/**
 * Create a new rental
 * @param req: Request
 * @param res: Response
 */
async function createRental(req: CustomRequest, res: Response) {
    try {
        // Get the rental's informations from the request body
        const rental: Rental = req.body.rental;
        const address: Address = req.body.adress;
        const caracteristic: Caracteristic = req.body.caracteristic;
        rental.userId = req.userId!;

        // Create the rental
        const newCaracteristic: {id: string} = await prisma.caracteristic.create({
            data: caracteristic
        });

        const newAddress: {id: string} = await prisma.address.create({
            data: address
        });
        
        rental.caracteristicId = newCaracteristic.id;
        rental.adressId = newAddress.id;
        console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
        const newRental: Rental = await prisma.rental.create({
            data: { ...rental }
        });

        // Send informations about the created rental to the client
        logger.info(newRental);
        res.status(201).json({ message: "Rental created" });
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({ message: "Bad Request" });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }

}

/**
 * Update the rental's informations by its id
 * @param req: Request
 * @param res: Response
 */
async function updateRentalById(req: Request, res: Response) {
    try {
        // Get the id from the request parameters
        const rentalId = req.params.id;

        // Check if the rental exists
        if (await prisma.rental.findUnique({ where: { id: rentalId } }) === null) {
            res.status(400).json({ message: "The rental was not found." });
            return;
        }

        // If the rental exists, update it
        const rental = await prisma.rental.update({
            where: { id: rentalId },
            data: req.body
        });

        // Send informations about the updated rental to the client
        logger.info(rental);
        res.status(200).json({ message: "Rental Updated" });
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({ message: "Bad Request" });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }

};

/**
 * Delete a rental by its id
 * @param req: Request
 * @param res: Response
 */
async function deleteRentalById(req: Request, res: Response) {
    try {
        // Get the id from the request parameters
        const rentalId = req.params.id;

        // Check if the rental exists
        if (await prisma.rental.findUnique({ where: { id: rentalId } }) === null) {
            res.status(400).json({ message: "Bad Request" });
            return;
        }

        // If the rental exists, delete it
        const deleteRental = await prisma.rental.delete({
            where: { id: rentalId }
        });

        // Send informations about the deleted rental to the client
        logger.info(deleteRental);
        res.status(204).json({ message: "Rental Deleted" });
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({ message: "Bad Request" });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export { createRental, deleteRentalById, getAllRentals, getRentalsById, updateRentalById };

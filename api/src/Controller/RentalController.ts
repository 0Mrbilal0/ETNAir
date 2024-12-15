import { Request, Response } from 'express';
import logger from "../../logger";
import { Advert, Prisma, PrismaClient } from "../Models/generated/prisma-client-js";

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
        // Get all rentals from the database and send them to the client
        const allRentals: Advert[] = await prisma.advert.findMany();
        res.status(200).json(allRentals);
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
        const id = Number(req.params.id);

        // Check if the rental exists
        const rental = await prisma.advert.findUnique({ where: { id: id } });
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
        const newRental: Advert = req.body;

        newRental.userId = Number(req.userId);

        // Create the rental
        const createRental: Advert = await prisma.advert.create({
            data: newRental
        });

        // Send informations about the created rental to the client
        logger.info(createRental);
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
        const rentalId: number = Number(req.params.id);

        // Check if the rental exists
        if (await prisma.advert.findUnique({ where: { id: rentalId } }) === null) {
            res.status(400).json({ message: "The rental was not found." });
            return;
        }

        // If the rental exists, update it
        const rental = await prisma.advert.update({
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
        const rentalId: number = Number(req.params.id);

        // Check if the rental exists
        if (await prisma.advert.findUnique({ where: { id: rentalId } }) === null) {
            res.status(400).json({ message: "Bad Request" });
            return;
        }

        // If the rental exists, delete it
        const deleteRental = await prisma.advert.delete({
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

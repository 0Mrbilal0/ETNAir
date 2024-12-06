import {Request, Response} from 'express';
import {PrismaClient, Advert, Prisma} from "../Models/generated/prisma-client-js";
import logger from "../../logger";

const prisma = new PrismaClient()

/**
 * Get all adverts
 * @param req: Request
 * @param res: Response
 */
async function getAllAdverts(req: Request, res: Response) {
    try {
        const createAdvert: Advert[] = await prisma.advert.findMany();
        if (createAdvert === undefined) res.status(404).json({message: "Adverts Not Found"});
        res.status(200).json(createAdvert)
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({message: "Bad Request"});
        }
        res.status(500).json({message: "Internal Server Error"});
    }
}

/**
 * Create a new advert
 * @param req: Request
 * @param res: Response
 */
async function createAdvert(req: Request, res: Response) {
    console.log(req.body);
    const newAdvert: Advert = await prisma.advert.create({
        data: req.body
    });
    logger.info(newAdvert);
    res.status(201).json({message: "Advert created"});
}

/**
 * Get advert by id
 * @param req: Request
 * @param res: Response
 */
async function getAdvertsById(req: Request, res: Response) {
    const id = req.params.id;
    if (isNaN(parseInt(id))) res.status(400).json({message: "Bad Request"});
    const advert = await prisma.advert.findUnique({
        where: {id: parseInt(id)}
    });
    if (advert === undefined) res.status(404).json({message: "Advert Not Found"});
    res.status(200).json(advert)
};

/**
 * Update advert's informations by id
 * @param req: Request
 * @param res: Response
 */
async function updateAdvertById(req: Request, res: Response) {
    if (isNaN(parseInt(req.params.id))) res.status(400).json({message: "Bad Request"});
    const advertId: number = Number(req.params.id);
    const advert = await prisma.advert.update({
        where: {id: advertId},
        data: req.body
    });
    if (advert === undefined) res.status(404).json({message: "Advert Not Found"});
    logger.info(advert);
    res.status(200).json({message: "Advert Updated"});
};

/**
 * Delete advert by id
 * @param req: Request
 * @param res: Response
 */
async function deleteAdvertById(req: Request, res: Response) {
    if (isNaN(parseInt(req.params.id))) res.status(400).json({message: "Bad Request"});
    const advertId: number = Number(req.params.id);
    const advert = await prisma.advert.delete({
        where: {id: advertId}
    });
    if (advert === undefined) res.status(404).json({message: "Advert Not Found"});
    logger.info(advert);
    res.status(204).json({message: "Advert Deleted"});
};

export {getAllAdverts, createAdvert, getAdvertsById, updateAdvertById, deleteAdvertById}

import {Request, Response} from 'express';
import {Prisma, PrismaClient, User} from "../Models/generated/prisma-client-js";
import logger from "../../logger";
const prisma = new PrismaClient();

/**
 * Get all users
 * @param req: Request
 * @param res: Response
 */
async function getAllUsers(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    logger.info(req.body);
    res.status(200).json(users);
}

/**
 * Create a new user
 * @param req: Request
 * @param res: Response
 */
async function createUser(req: Request, res: Response) {
    const newUser: User = req.body;
    try {
        const createUser = await prisma.user.create({
            data: newUser
        });
        logger.info("User Created");
        res.status(200).json({message: "User Created"});
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                res.status(409).json({message: "Duplicate phone number or email"});
            }
        }
        res.status(500).json({message: "Internal Server Error"});
    }
}

/**
 * Get user by id
 * @param req: Request
 * @param res: Response
 */
async function getUserById(req: Request, res: Response) {
    const id = req.params.id;
    if (isNaN(parseInt(id))) res.status(400).json({message: "Bad Request"});
    const user = await prisma.user.findUnique({
        where: {id: parseInt(id)}
    })
    if (user === undefined) res.status(404).json({message: "User Not Found"});
    logger.info(user)
    res.status(200).json(user);
}

/**
 * Update user's informations by id
 * @param req: Request
 * @param res: Response
 */
async function updateUserById(req: Request, res: Response) {
    const id = req.params.id;
    if (isNaN(parseInt(id))) res.status(400).json({message: "Bad Request"});
    const updatedUser = await prisma.user.update({
        where: {id: parseInt(id)},
        data: req.body
    });
    logger.info(updatedUser);
    res.status(200).json({message: "User Updated"});
}

/**
 * Delete user by id
 * @param req: Request
 * @param res: Response
 */
async function deleteUserById(req: Request, res: Response) {
    if (isNaN(parseInt(req.params.id))) res.status(400).json({message: "Bad Request"});
    const userId: number = Number(req.params.id);
    const user = await prisma.user.delete({
        where: {id: userId}
    });
    logger.info(user);
    res.status(204).json({message: "User Deleted"});
}

export {getAllUsers, createUser, getUserById, updateUserById, deleteUserById}

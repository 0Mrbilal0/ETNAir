import {Request, Response} from 'express';
import { PrismaClient, User } from "../Models/generated/prisma-client-js";
const prisma = new PrismaClient()

/**
 * Get all users
 * @param req: Request
 * @param res: Response
 */
async function getAllUsers(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    console.log(req.body)
    res.json(users)
}

/**
 * Create a new user
 * @param req: Request
 * @param res: Response
 */
async function createUser(req: Request, res: Response) {
    const newUser: User = req.body;
    console.log("create User")
    console.log(req.body)
    const createUser = await prisma.user.create({
        data: newUser
    });
    res.status(200).json(createUser);
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
    // logger.info(user)
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
    // logger.info(updatedUser);
    res.status(200).json({message: "User Updated"});
}

/**
 * Delete user by id
 * @param req: Request
 * @param res: Response
 */
async function deleteUserById(req: Request, res: Response) {
    const id = req.params.id;
    if (isNaN(parseInt(id))) res.status(400).json({message: "Bad Request"});
    const userId = await prisma.user.delete({
        where: {id: parseInt(id)}
    });
    // logger.info(userId);
    res.status(204).json({message: "User Deleted"});
}

export {getAllUsers, createUser, getUserById, updateUserById, deleteUserById}

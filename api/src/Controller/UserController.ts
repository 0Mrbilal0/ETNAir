import { Request, Response } from 'express';
import {PrismaClient, User} from "../Models/generated/prisma-client-js";
import logger from "../../logger";
const prisma = new PrismaClient()

const users = [
    {
        id: 1,
        name: "John Doe",
        age: 25
    },
    {
        id: 2,
        name: "Jane Doe",
        age: 30
    }
]

/**
 * Get all users 
 * @param req: Request
 * @param res: Response
 */
async function getAllUsers(req: Request, res: Response ) {
    const users = await prisma.user.findMany();
    res.json(users)
}

/**
 * Create a new user
 * @param req: Request
 * @param res: Response
 */
async function createUser(req: Request, res: Response ) {
    const newUser: User = req.body;
    const createUser = await prisma.user.create({
        data: newUser
    });
    res.status(201).json(createUser)
}

/**
 * Get user by id
 * @param req: Request
 * @param res: Response 
 */
async function getUserById(req: Request, res: Response ) {
    const id = req.params.id;
    if (isNaN(parseInt(id))) res.status(400).json({message: "Bad Request"});
    const user = users.find(user => user.id === parseInt(id));
    if (user === undefined ) res.status(404).json({message: "User Not Found"});
    res.json(user);
}

/**
 * Update user's informations by id
 * @param req: Request
 * @param res: Response
 */
async function updateUserById(req: Request, res: Response ) {
    const id = req.params.id;
    if (isNaN(parseInt(id))) res.status(400).json({message: "Bad Request"});
    const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: req.body
    });
    logger.info(updatedUser);
    res.sendStatus(200);
}

/**
 * Delete user by id
 * @param req: Request
 * @param res: Response 
 */
async function deleteUserById(req: Request, res: Response ) {
    const id = req.params.id;
    if (isNaN(parseInt(id))) res.status(400).json({message: "Bad Request"});
    const userId = users.findIndex(user => user.id === parseInt(id));
    if (users[userId] === undefined ) res.status(404).json({message: "User Not Found"});
    users.splice(userId, 1);
    res.sendStatus(204);
}

export { getAllUsers, createUser, getUserById, updateUserById, deleteUserById }

import {Request, Response} from 'express';
import {JwtPayload} from "jsonwebtoken";
import {Prisma, PrismaClient, User} from "../Models/generated/prisma-client-js";
import logger from "../../logger";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const saltRounds = 12;

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
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(newUser.password, salt);
        newUser.password = hashedPassword;
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
    const user = await prisma.user.findUnique({
        where: {id: id}
    })
    if (user === undefined) res.status(404).json({message: "User Not Found"});
    logger.info(user)
    res.status(200).json(user);
}

async function loginUser(req: Request, res: Response){
    const { email, password } = req.body;

    const account = await prisma.user.findUnique({
        where: {email: email}
    });

    if (account === null) res.status(404).json({message: "Wrong email"});

    const  goodPassword = await bcrypt.compare(password, account!.password!);

    if (goodPassword === false) {
        res.status(401).json({message: "Wrong password"});
    } else {
        const token = jwt.sign({id: account!.id}, process.env.JWT_SECRET, {expiresIn: '1h'}) as JwtPayload;
        res.cookie('token', token, {httpOnly: true});
        res.status(200).json({message: "Logged In"});
    }
}

/**
 * Update user's informations by id
 * @param req: Request
 * @param res: Response
 */
async function updateUserById(req: Request, res: Response) {
    const id = req.params.id;
    const updatedUser = await prisma.user.update({
        where: {id: id},
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
    const userId: string = String(req.params.id);
    const user = await prisma.user.delete({
        where: {id: userId}
    });
    logger.info(user);
    res.status(204).json({message: "User Deleted"});
}

export {getAllUsers, createUser, getUserById, updateUserById, loginUser, deleteUserById}

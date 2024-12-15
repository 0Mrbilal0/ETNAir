import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import logger from "../../logger";
import { Prisma, PrismaClient, User } from "../Models/generated/prisma-client-js";

const prisma = new PrismaClient();
const saltRounds = 12;

interface CustomRequest extends Request {
    userId?: string;
}

/**
 * Get all users from the database
 * @param req: Request
 * @param res: Response
 */
async function getAllUsers(req: Request, res: Response) {
    try {
        // Get all users from the database
        const users = await prisma.user.findMany();

        // Send the users to the client
        logger.info(req.body);
        res.status(200).json(users);
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({ message: "Bad Request" });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
}

/**
 * Get informations about a user by its id
 * @param req: Request
 * @param res: Response
 */
async function getUserById(req: CustomRequest, res: Response) {
    try {
        // Get the id from the request parameters
        const userId = Number(req.userId);

        // Check if the user exists in the database
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (user === null) {
            res.status(404).json({ message: "User Not Found" });
            return;
        }

        // If the user exists, send it to the client.
        logger.info(user)
        res.status(200).json(user);
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({ message: "Bad Request" });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
}

/**
 * Create a new user
 * @param req: Request
 * @param res: Response
 */
async function createUser(req: Request, res: Response) {
    try {
        // Get the user's informations from the request body
        const newUser: User = req.body;

        // Hash the user's password
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(newUser.password, salt);
        newUser.password = hashedPassword;

        // Create the user
        const createUser = await prisma.user.create({
            data: newUser
        });

        // Send informations about the created user to the client
        logger.info("User Created");
        res.status(200).json(createUser);

    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                res.status(409).json({ message: "Duplicate phone number or email" });
            }
        }
    }
}

/**
 *  Log in a user
 * @param req: Request
 * @param res: Response
 */
async function loginUser(req: Request, res: Response) {
    try {
        // Get the email and password from the request body
        const { email, password } = req.body;

        // Check if the user exists in the database
        const account = await prisma.user.findUnique({ where: { email: email } });
        if (account === null) {
            res.status(404).json({ message: "Wrong email" });
            return;
        }

        // Check if the password is correct
        const goodPassword = await bcrypt.compare(password, account!.password!);
        if (!goodPassword) {
            res.status(401).json({ message: "Wrong password" });
            return;
        }

        // If the password is correct, create a JWT token and send it to the client
        const token = jwt.sign({ userId: account!.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: "Logged In" });

    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({ message: "Bad Request" });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
}

/**
 * Update the user's informations by its id
 * @param req: Request
 * @param res: Response
 */
async function updateUserById(req: CustomRequest, res: Response) {
    try {
        // Get the id from the request parameters
        const id = Number(req.userId);

        // Check if the user exists in the database
        if (await prisma.user.findUnique({ where: { id: id } }) === null) {
            res.status(404).json({ message: "user not found" });
            return;
        }

        // If the user exists, update it
        const updatedUser = await prisma.user.update({
            where: { id: id },
            data: req.body
        });

        // Send informations about the updated user to the client
        logger.info(updatedUser);
        res.status(200).json({ message: "User Updated" });
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({ message: "Bad Request" });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
}

/**
 * Delete a user by its id
 * @param req: Request
 * @param res: Response
 */
async function deleteUserById(req: CustomRequest, res: Response) {
    try {
        // Get the id from the request parameters
        const userId: number = Number(req.userId);

        // Check if the user exists in the database
        if (await prisma.user.findUnique({ where: { id: userId } }) === null) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // If the user exists, delete it
        const user = await prisma.user.delete({
            where: { id: userId }
        });

        // Send informations about the deleted user to the client
        logger.info(user);
        res.status(204).json({ message: "User Deleted" });
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({ message: "Bad Request" });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { createUser, deleteUserById, getAllUsers, getUserById, loginUser, updateUserById };

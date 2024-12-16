import { Router, Request } from 'express';
import { getAllUsers, createUser, getUserById, updateUserById, loginUser, deleteUserById } from '../Controllers/UserController';

export const userRouter = Router();
const verifyToken = require('../middleware/authMiddleware');

// Ping pong route
userRouter.get("/", (req, res) => {
    res.send("Ping Pong");
})

// Get all users
userRouter.get("/auth", verifyToken, getAllUsers);

// Get user by id
userRouter.get("/auth/:id", verifyToken, getUserById);

// Create a new user
userRouter.post("/auth/register", createUser);

// Login user
userRouter.post("/auth/login", loginUser);

// Update user by id
userRouter.put("/auth/:id", verifyToken, updateUserById);

// Delete user by id
userRouter.delete("/auth/:id", verifyToken, deleteUserById);
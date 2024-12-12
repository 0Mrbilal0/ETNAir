import { Router } from 'express';
import { body } from 'express-validator';
import { createUser, deleteUserById, getAllUsers, getUserById, loginUser, updateUserById } from '../Controller/UserController';
import { verifyToken } from '../Middleware/authMiddleware';
export const userRouter = Router();

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

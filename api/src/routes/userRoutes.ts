import { Router, Request } from 'express';
import { getAllUsers, createUser, getUserById, updateUserById, loginUser, deleteUserById } from '../controller/UserController';

export const userRouter = Router();

// Ping pong route
userRouter.get("/", (req, res) => {
    res.redirect("/auth");
})

// Get all users
userRouter.get("/utilisateurs", getAllUsers);

// Get user by id
userRouter.get("/auth/:id", getUserById);

// Create a new user
userRouter.post("/auth/register", createUser);

// Login user
userRouter.post("/auth/login", loginUser);

// Update user by id
userRouter.put("/auth/:id", updateUserById);

// Delete user by id
userRouter.delete("/auth/:id", deleteUserById);
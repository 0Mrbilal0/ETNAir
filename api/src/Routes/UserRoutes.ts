import { Router } from 'express';
import { createUser, deleteUserById, getAllUsers, getUserById, loginUser, updateUserById } from '../Controller/UserController';
import { verifyToken } from '../Middleware/AuthMiddleware';
import { checkData } from '../Middleware/ValidatorMiddleware';
import { loginSchema } from '../Schema/LoginSchema';
import { userSchema } from '../Schema/UserSchema';
export const userRouter = Router();

// Ping pong route
userRouter.get("/", (req, res) => {
    res.send("Ping Pong");
})

// Get all users
userRouter.get("/users", verifyToken, getAllUsers);

// Get user by id
userRouter.get("/user", verifyToken, getUserById);

// Create a new user
userRouter.post("/auth/register", userSchema, checkData, createUser);

// Login user
userRouter.post("/auth/login", loginSchema, checkData, loginUser);

// Update user by id
userRouter.put("/user", verifyToken, userSchema, checkData, updateUserById);

// Delete user by id
userRouter.delete("/user", verifyToken, deleteUserById);

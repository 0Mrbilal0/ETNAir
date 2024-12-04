import { Router } from 'express';
import { getAllUsers, createUser, getUserById, updateUserById, deleteUserById } from '../Controller/UserController';
import { getAllAdverts, getAdvertsById } from '../Controller/AdvertController';

export const router = Router();

// Get all users
router.get("/utilisateurs", getAllUsers);

// Create a new user
router.post("/utilisateurs", createUser);

// Get user by id
router.get("/utilisateurs/:id", getUserById);

// Update user by id
router.put("/utilisateurs/:id", updateUserById);

// Delete user by id
router.delete("/utilisateurs/:id", deleteUserById);

// Get all adverts
router.get("/annonces", getAllAdverts);

// Get advert by id
router.get("/annonces/:id", getAdvertsById);


// 404 route
router.get("/*", (req, res) => {
    res.status(404).json({message: "Not Found"})
});
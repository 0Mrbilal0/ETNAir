import { Router } from 'express';
import { getAllUsers, createUser, getUserById, updateUserById, deleteUserById } from '../Controller/UserController';
import { getAllAdverts, createAdvert, getAdvertsById, updateAdvertById, deleteAdvertById} from '../Controller/AdvertController';

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

// Create a new advert
router.post("/annonces", createAdvert);

// Get advert by id
router.get("/annonces/:id", getAdvertsById);

// Update advert by id
router.put("/annonces/:id", updateAdvertById);

// Delete advert by id
router.delete("/annonces/:id", deleteAdvertById);

// 404 route
router.get("/*", (req, res) => {
    res.status(404).json({message: "Not Found"});
});

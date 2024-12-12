import { Router } from 'express';
import { getAllUsers, createUser, getUserById, updateUserById, deleteUserById } from '../Controller/UserController';
import { getAllRentals, createRental, getRentalsById, updateRentalById, deleteRentalById} from '../Controller/RentalController';

export const router = Router();

// Ping pong route
router.get("/", (req, res) => {
    res.status(200).json({message: "Ping Pong"});
})

/**
 *  Users routes
 */

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

/**
 *  Rentals routes
 */

// Get all adverts
router.get("/annonces", getAllRentals);

// Create a new advert
router.post("/annonces", createRental);

// Get advert by id
router.get("/annonces/:id", getRentalsById);

// Update advert by id
router.put("/annonces/:id", updateRentalById);

// Delete advert by id
router.delete("/annonces/:id", deleteRentalById);

// 404 route
router.get("/*", (req, res) => {
    res.status(404).json({message: "Not Found"});
});

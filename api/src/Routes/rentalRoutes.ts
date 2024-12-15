import { Router } from 'express';
import { createRental, deleteRentalById, getAllRentals, getRentalsById, updateRentalById } from '../Controller/RentalController';
import { verifyToken } from '../Middleware/authMiddleware';
import { checkData } from '../Middleware/validatorMiddleware';
import { rentalSchema } from '../Schema/RentalSchema';

export const rentalRouter = Router();

// Get all rentals
rentalRouter.get("/rentals", getAllRentals);

// Get rental by id
rentalRouter.get("/rental/:id", getRentalsById);

// Create a new rental
rentalRouter.post("/rental", verifyToken, rentalSchema, checkData, createRental);

// Update rental by id
rentalRouter.put("/rental/:id", verifyToken, rentalSchema, checkData, updateRentalById);

// Delete rental by id
rentalRouter.delete("/rental/:id", verifyToken, deleteRentalById);

// 404 route
rentalRouter.get("/*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
});

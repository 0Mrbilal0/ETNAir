import { Router } from 'express';
import { getAllRentals, createRental, getRentalsById, updateRentalById, deleteRentalById} from '../Controllers/RentalController';
import { verifyToken } from '../Middleware/AuthMiddleware';
import { rentalSchema } from '../Schema/RentalSchema';
import { checkData } from '../Middleware/ValidatorMiddleware';

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

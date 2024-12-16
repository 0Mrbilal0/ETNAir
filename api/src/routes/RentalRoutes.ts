import { Router } from 'express';
import { getAllRentals, createRental, getRentalsById, updateRentalById, deleteRentalById} from '../Controllers/RentalController';

const verifyToken = require('../Middleware/authMiddleware');

export const advertRouter = Router();

// Get all adverts
advertRouter.get("/rentals", getAllRentals);

// Create a new advert
advertRouter.post("/rentals", verifyToken, createRental);

// Get advert by id
advertRouter.get("/rentals/:id", getRentalsById);

// Update advert by id
advertRouter.put("/rentals/:id", verifyToken,updateRentalById);

// Delete advert by id
advertRouter.delete("/rentals/:id", verifyToken, deleteRentalById);

// 404 route
advertRouter.get("/*", (req, res) => {
    res.status(404).json({message: "Not Found"});
});

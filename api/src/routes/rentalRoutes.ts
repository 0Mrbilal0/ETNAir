import { getAllRentals, createRental, getRentalsById, updateRentalById, deleteRentalById } from '../Controller/RentalController';
import { verifyToken } from '../Middleware/authMiddleware';

export const rentalRouter = Router();

// Get all rentals
rentalRouter.get("/rentals", getAllRentals);

// Get rental by id
rentalRouter.get("/rentals/:id", getRentalsById);

// Create a new rental
rentalRouter.post("/rentals", verifyToken, createRental);

// Update rental by id
rentalRouter.put("/rentals/:id", verifyToken, updateRentalById);

// Delete rental by id
rentalRouter.delete("/rentals/:id", verifyToken, deleteRentalById);

// 404 route
rentalRouter.get("/*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
});

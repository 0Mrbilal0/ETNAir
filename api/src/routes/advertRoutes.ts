import { getAllAdverts, createAdvert, getAdvertsById, updateAdvertById, deleteAdvertById} from '../controller/AdvertController';
import { verifyToken } from '../middleware/authMiddleware';
import { Router } from 'express';

export const advertRouter = Router();

// Get all adverts
advertRouter.get("/rentals", getAllAdverts);

// Create a new advert
advertRouter.post("/rentals", verifyToken, createAdvert);

// Get advert by id
advertRouter.get("/rentals/:id", getAdvertsById);

// Update advert by id
advertRouter.put("/rentals/:id", verifyToken,updateAdvertById);

// Delete advert by id
advertRouter.delete("/rentals/:id", verifyToken, deleteAdvertById);

// 404 route
advertRouter.get("/*", (req, res) => {
    res.status(404).json({message: "Not Found"});
});

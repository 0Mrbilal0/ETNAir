import { Router } from 'express';
import { getAllAdverts, createAdvert, getAdvertsById, updateAdvertById, deleteAdvertById} from '../controller/AdvertController';

export const advertRouter = Router();

// Get all adverts
advertRouter.get("/annonces", getAllAdverts);

// Create a new advert
advertRouter.post("/annonces", createAdvert);

// Get advert by id
advertRouter.get("/annonces/:id", getAdvertsById);

// Update advert by id
advertRouter.put("/annonces/:id", updateAdvertById);

// Delete advert by id
advertRouter.delete("/annonces/:id", deleteAdvertById);

// 404 route
advertRouter.get("/*", (req, res) => {
    res.status(404).json({message: "Not Found"});
});

import express from 'express';
import { Router } from 'express';
import { getAllUsers, GetUserById, getAllAdverts, getAdvertsById } from './Controller/UserController';

export const router = Router();

router.get("/utilisateurs", getAllUsers);
router.get("/utilisateurs/:id", GetUserById);

router.get("/annonces", getAllAdverts);
router.get("/annonces/:id", getAdvertsById);

router.get("/*", (req, res) => {
    res.status(404).json({message: "Not Found"})
});
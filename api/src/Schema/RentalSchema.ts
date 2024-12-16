import { body } from 'express-validator';

export const rentalSchema = [
    body('title').notEmpty().withMessage('A title is required !'),
    body('nb_person').notEmpty().withMessage('A rumber of person is required !'),
    body('price').notEmpty().withMessage('A price is required !'),
    body('available_date').isLength({ min: 1 }).withMessage('An available date is required !'),
    body('type').notEmpty().withMessage('A type is required !'),
];
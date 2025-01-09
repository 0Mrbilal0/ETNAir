import { body } from 'express-validator';

export const rentalSchema = [
    body('rental.title').notEmpty().withMessage('A title is required !'),
    body('rental.nb_person').notEmpty().withMessage('A rumber of person is required !'),
    body('rental.price').notEmpty().withMessage('A price is required !'),
    body('rental.available_date').isLength({ min: 1 }).withMessage('An available date is required !'),
    body('rental.type').notEmpty().withMessage('A type is required !'),
];
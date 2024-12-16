import { body } from 'express-validator';

export const loginSchema = [
    body('email').isEmail().withMessage('The email is not valid !'),
    body('password').notEmpty().withMessage('A password is required !'),
];
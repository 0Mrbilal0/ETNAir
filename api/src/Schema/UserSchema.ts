import { body } from 'express-validator';

export const userSchema = [
    body('email').isEmail().withMessage('The email is not valid !'),
    body('name').notEmpty().withMessage('A name is required !'),
    body('password').isLength({ min: 8 }).withMessage('The password must be at least 8 characters long !'),
    body('about_me').optional().isLength({ max: 255 }).withMessage('The section "About me" must be less than 255 characters !'),
    body('phone_number').isLength({ min: 10, max: 10 }).withMessage('The phone number must be 10 characters long !'),
];
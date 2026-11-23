
import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import validate from '../middleware/validate.js';
import { registerSchema } from '../validators/auth.validator.js';

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', login);
export default router;  




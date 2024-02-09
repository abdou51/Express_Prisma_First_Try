import {Router } from 'express';
const router = Router();
import userRoutes from "../routes/userRoutes.js"




router.use('/api/users', userRoutes)

export default router
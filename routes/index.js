import {Router } from 'express';
const router = Router();
import userRoutes from "../routes/userRoutes.js"
import todoRoutes from "../routes/todoRoutes.js"




router.use('/api/users', userRoutes)
router.use('/api/todos', todoRoutes)

export default router
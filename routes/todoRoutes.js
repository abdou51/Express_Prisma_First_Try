import {Router } from 'express';
import {createTodo} from '../controllers/todoController.js'
import {getTodos} from '../controllers/todoController.js'





const router = Router();



router.post('/', createTodo)
router.get('/', getTodos)


export default router;
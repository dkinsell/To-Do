import { Router } from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/toDoController';

const router = Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;

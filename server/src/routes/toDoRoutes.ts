import { Router } from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/toDoController';

const router = Router();

router.get('/get', getTodos);
router.post('/create', createTodo);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

export default router;

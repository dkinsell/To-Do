const express = require('express');
const router = express.Router();
const toDoController = require('../controllers/toDoController');

router.post('/create', toDoController.createToDo);
router.get('/get', toDoController.getToDos);
router.put('/update/:id', toDoController.updateToDo);
router.delete('/delete/:id', toDoController.deleteToDo);

module.exports = router;
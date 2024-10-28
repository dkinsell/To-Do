const express = require('express');
const toDoController = require('../controllers/toDoController');
const router = express.Router();

router.post('/create', toDoController.createToDo);

router.get('/get', toDoController.getToDos);

router.put('/update/:id', toDoController.updateToDo);

router.delete('/delete/:id', toDoController.deleteToDo);

module.exports = router;
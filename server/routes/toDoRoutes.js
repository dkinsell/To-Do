const express = require('express');
const toDoController = require('../controllers/toDoController');
const router = express.Router();

router.post('/create', toDoController.createToDo);

router.get('/get', toDoController.getToDos);

router.put('/update', toDoController.updateToDo);

router.delete('/delete', toDoController.deleteToDo);

module.exports = router;
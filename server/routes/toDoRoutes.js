const express = require('express');
const router = express.Router();
const toDoController = require('../controllers/toDoController');

router.post('/create', toDoController.createToDo);
router.post('/get', toDoController.getToDos);
router.post('/update/:id', toDoController.updateToDo);
router.post('/delete/:id', toDoController.deleteToDo);


module.exports = router;
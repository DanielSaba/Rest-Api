const express = require('express');
const router = express.Router();

const {createTask, getTask, getoneTask, deleteTask, updateTask} =require('../controllers/task.controller');

router.post('/',createTask);
router.get('/',getTask);
router.get('/:id',getoneTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

module.exports=router;
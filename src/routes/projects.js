const express = require('express');
const router = express.Router();

const {createProject, getProject, getoneProject, deleteProject, updateProject} =require('../controllers/project.controller');

router.post('/',createProject);
router.get('/',getProject);
router.get('/:id',getoneProject);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);

module.exports=router;
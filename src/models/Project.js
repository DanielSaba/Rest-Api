const Sequelize = require('sequelize');
const sequalize =require('../database/database');

const Task = require('../models/Task');

const Project = sequalize.define('projects',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type:Sequelize.TEXT
    },
    priority:{
        type: Sequelize.INTEGER
    },
    description:{
        type: Sequelize.INTEGER
    },
    deliverydate:{
        type: Sequelize.DATE
    }

},{
    timestamps:false
});

/* Project.hasMany(Task,{foreingKey:'projectid', sourceKey:'id'});
Task.belongsTo(Project,{foreingKey: 'projectid', sourceKey:'id'}); */

module.exports = Project;






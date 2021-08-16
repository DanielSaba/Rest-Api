const Sequelize = require('sequelize');
const sequalize =require('../database/database');

const Task = sequalize.define('tasks',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type:Sequelize.TEXT
    },
    done:{
        type: Sequelize.BOOLEAN
    },
    projectid:{
        type: Sequelize.INTEGER
    }

},{
    timestamps:false
});

module.exports = Task;


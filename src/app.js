//import  express, {json} from 'express';
const express = require('express');
const json = require('express').json;

/* import morgan  from 'morgan'; */
const morgan = require('morgan');

//import routes
const projectRoutes = require('./routes/projects') ;
const taskRoutes = require ('./routes/tasks');

const app=express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//use Routes
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);


module.exports=app;


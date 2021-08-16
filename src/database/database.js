const Sequelize = require('sequelize');

const sequalize =new Sequelize(
    'postgres',
    'postgres',
    '123',
    {
        host:'localhost',
        dialect:'postgres',
        pool:{
            max:5,
            min:0,
            require:30000,
            idle:10000
        },
        liggins:false
    }
)

module.exports=sequalize;
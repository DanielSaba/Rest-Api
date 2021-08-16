const Task = require('../models/Task');

//CREATE
async function createTask(req,res){
    const {name, done, projectid}= req.body;
  try{
    let newTask = await  Task.create({
        name,done,projectid
    },{
        fields:['name','done','projectid']
    });
   
        return res.json({
            ok:true,
            msg:'datos enviados',
            data:newTask
        });
    
  }catch(error){
      console.log(error);
        res.status(500).json({
            ok:false
        });
  }
}

//GET
async function getTask(req, res){
    try{
        const task = await Task.findAll();
        
            return res.status(200).json({
                ok:true,
                msg:'Get Datos',
                task
            });
        
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'fallo'
        });
    }
}

//GETONE
async function getoneTask(req, res){
    const {id}=req.params;
    try{
        const getone=await Task.findOne({
            where:{
                id
            }
        })
        if(getone){
           return  res.status(200).json({
                ok:true,
                msg:'Get oneTask',
                getone
            });
        }
    }catch(error){
        console.log(error);
        res.status(300).json({
            ok:false,
            msg:'error oneTask'
        });
    }
}

//DELETE
async function deleteTask(req, res){
    const{id}=req.params;
    try{
        const deletet=await Task.destroy({
            where:{
                id
            }
        });

        if(deletet){
            return res.json({
                ok:true,
                msg:'Deleted',
                deletet
            });
        }
    }catch(error){
        req.json({
            ok:false,
            msg:'not deleted'
        });
    } 
}

//UPDATE
async function updateTask(req, res){
    const {id}= req.params;
    const {name, priority, description, deliverydate} = req.body;

    const task=await Task.findAll({
        where:{
            id
        }
    });
    //console.log(project);
    if(task.length>0){
        task.forEach( async element => {
            await element.update({
                name,
                priority,
                description,
                deliverydate
            })
        });
    }

    return res.status(200).json({
        ok:true,
        msg:'Edited'
    });
}



module.exports={getTask,createTask,getoneTask,deleteTask,updateTask}
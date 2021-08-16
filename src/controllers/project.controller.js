const Project = require('../models/Project');

//CREATE
async function createProject (req,res){
    const {name, priority, description, deliverydate}= req.body;
  try{
    let newProject = await  Project.create({
        name,priority,description,deliverydate
    },{
        fields:['name','priority','description','deliverydate']
    });
    if (newProject){
        return res.json({
            ok:true,
            msg:'datos enviados',
            data:newProject
        });
    }
  }catch(error){
      console.log(error);
        res.status(500).json({
            ok:false
        });
  }
}

//GET
async function getProject(req, res){
    try{
        const project = await Project.findAll();
        
            return res.status(200).json({
                ok:true,
                msg:'Get Datos',
                project
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
async function getoneProject(req, res){
    const {id}=req.params;
    try{
        const getone=await Project.findOne({
            where:{
                id
            }
        })
        if(getone){
           return  res.status(200).json({
                ok:true,
                msg:'Get oneProject',
                getone
            });
        }
    }catch(error){
        console.log(error);
        res.status(300).json({
            ok:false,
            msg:'error oneProject'
        });
    }
}

//DELETE
async function deleteProject(req, res){
    const{id}=req.params;
    try{
        const deletep=await Project.destroy({
            where:{
                id
            }
        });

        if(deletep){
            return res.json({
                ok:true,
                msg:'Deleted',
                deletep
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
async function updateProject(req, res){
    const {id}= req.params;
    const {name, priority, description, deliverydate} = req.body;

    const project=await Project.findAll({
        where:{
            id
        }
    });
    //console.log(project);
    if(project.length>0){
        project.forEach( async element => {
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



module.exports={getProject,createProject,getoneProject,deleteProject, updateProject}
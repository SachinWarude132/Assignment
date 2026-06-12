const Task = require("../models/task.model");

 const createTask = async(req,res)=>{
    try {
    const { title, description, status } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
      createdBy: req.user.id,
    });

    return res.status(201).json({
      message: "Task Created Successfully",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
}
}

 const getAllTasks = async(req,res)=>{
   
    try {
    const tasks = await Task.find({
      createdBy: req.user.id,
    });

    return res.status(200).json({
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
 

 const getTaskById = async(req,res)=>{
    
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task Not Found",
      });
    }

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
 

 const updateTask = async(req,res)=>{
   
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user.id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task Not Found",
      });
    }

    return res.status(200).json({
      message: "Task Updated Successfully",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
 

 const deleteTask = async(req,res)=>{
    
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task Not Found",
      });
    }

    return res.status(200).json({
      message: "Task Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
 


module.exports ={
    createTask,
getAllTasks,
getTaskById,
updateTask,
deleteTask,
}
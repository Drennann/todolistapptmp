import Task from "../models/Taks.js"

export let getTasksRouter = async(req, res) => {
    try{
        let tmp = await Task.find();
        res.send(tmp);
    }
        catch(e){
            res.status(400).send(e);
        }
}

export let postTasksRouter = async (req, res) => {
    try{
        console.log(req.body);
        let {title, description} = req.body;
        let newTask = new Task({title, description});
        await newTask.save();
        res.send("Task Created");
    }
    catch(e){
        res.status(400).send(e);
    }
}

export let putTasksRouter = async (req, res) => {
    
    try{
        let {title, description} = req.body;
        let _id = req.params.id;
        await Task.findByIdAndUpdate(_id, {
            title, description
        })
        res.send("Task Updated")
    }
    catch(e){
        res.status(400).send(e);
    }
}

export let deleteTasksRouter = async (req, res) => {
    try{
        let {title, description} = req.body;
        let _id = req.params.id;
        await Task.findByIdAndDelete(_id, {
            title, description
        })
        res.send("Task Deleted")
    }
    catch(e){
        res.status(400).send(e);
    }
}

export let getTaskRouter = async(req, res) => {
    try{
        let task = await Task.findById(req.params.id);
        res.send(task);
    }
    catch(e){
        res.status(400).send(e);
    }
}
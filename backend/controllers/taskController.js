// createTask, fetchTasks, updateTask, removeTask
import { validationResult } from "express-validator";
import Task from "../models/task.js";

export const createTask = async (req, res) => {
    try {
        const { task } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const taskName = new Task({
            task, status:false, user: req.user.id
        })
        const savedTask = await taskName.save();
        res.json(savedTask);
    } catch (error) {
        console.log(error);
        res.status(400).send("Task creation failed");
    }
}

export const fetchTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(400).send("Task fetching failed");
    }
}

export const updateStatus = async (req, res) => {
    try {
        const { status }= req.body;
        const { id } = req.params;
        console.log(id);
        let task = await Task.findById(id);
        if (!task) {
            return res.status(404).send("Task not found");
        }
        if (task.user.toString() !== req.user.id) {
            return res.status(401).send("Not authorized");
        }
        task = await Task.findByIdAndUpdate(id, {status}, {new: true});
        res.json(task);
    } catch (error) {
        console.log(error);
        res.status(400).send("Task update failed");
    }
}

export const removeTask = async (req, res) => {
    try {
        let {id} = req.params;
        let task = await Task.findById(id);
        if (!task) {
            return res.status(404).send('Not Found');
        }
        if (task.user.toString() !== req.user.id) {
            return res.status(401).send('not allowed')
        }
        task = await Task.findByIdAndDelete(id);
        res.json({ "success": "task has been deleted"});
    } catch (error) {
        console.log(error);
        res.status(400).send("Task remove failed");
    }
}
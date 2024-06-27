// createTask, fetchTasks, updateTask, removeTask

export const createTask = async (req, res) => {
    try {
        res.send("Task created");
    } catch (error) {
        console.log(error);
        res.status(400).send("Task creation failed");
    }
}

export const fetchTasks = async (req, res) => {
    try {
        res.send("Tasks fetched");
    } catch (error) {
        console.log(error);
        res.status(400).send("Task fetching failed");
    }
}

export const updateTask = async (req, res) => {
    try {
        res.send("Task updated");
    } catch (error) {
        console.log(error);
        res.status(400).send("Task update failed");
    }
}

export const removeTask = async (req, res) => {
    try {
        res.send("Task removed");
    } catch (error) {
        console.log(error);
        res.status(400).send("Task remove failed");
    }
}
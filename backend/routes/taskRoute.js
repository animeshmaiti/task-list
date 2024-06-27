import express from 'express';
import { createTask, fetchTasks, updateTask, removeTask} from '../controllers/taskController.js';

const router = express.Router();

router.post('/create-task',createTask);
router.get('/get-tasks',fetchTasks);
router.put('/update-task',updateTask);
router.delete('/remove-task',removeTask);

export default router;
import express from 'express';
import { createTask, fetchTasks, updateStatus, removeTask } from '../controllers/taskController.js';
import protectRoute from "../middleware/protectRoute.js";
import { body } from 'express-validator';

const router = express.Router();

router.post('/create-task', protectRoute, body('task', 'enter min length of 3').isLength({ min: 3 }), createTask);
router.get('/get-tasks', protectRoute, fetchTasks);
router.put('/update-status/:id', protectRoute, updateStatus);
router.delete('/remove-task/:id', protectRoute, removeTask);

export default router;
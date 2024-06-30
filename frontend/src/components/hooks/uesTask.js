import { useState } from 'react';

export const useTask = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = async (task) => {
        try {
            const response = await fetch('api/tasks/create-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({task})
            })
            if (!response.ok) {
                throw new Error(data.message || 'Could not add task');
            }
            const data = await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    const getTasks = async () => {
        try {
            const response = await fetch('api/tasks/get-tasks');
            if (!response.ok) {
                throw new Error(data.message || 'Could not get tasks');
            }
            const data = await response.json();
            console.log(data);
            setTasks(data);
        } catch (error) {
            console.error(error);
        }
    }
    return { addTask, getTasks, tasks}
}

import { createContext, useContext, useState,useCallback } from "react";


const taskContext = createContext();

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    const getTasks = useCallback(async () => {
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
    },[]);

    const addTask = useCallback(async (task) => {
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
            getTasks();
        } catch (error) {
            console.error(error);
        }
    },[getTasks]);

  return (
    <taskContext.Provider value={
        {addTask, getTasks, tasks}
    }>
      {children}
    </taskContext.Provider>
  )
}

export const useTask = () => {
  return useContext(taskContext);
}

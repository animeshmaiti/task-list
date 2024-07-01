import { createContext, useContext, useState, useCallback } from "react";

const taskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = useCallback(async () => {
    try {
      const response = await fetch("api/tasks/get-tasks");
      if (!response.ok) {
        throw new Error(data.message || "Could not get tasks");
      }
      const data = await response.json();
      console.log(data);
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const addTask = useCallback(
    async (task) => {
      try {
        const response = await fetch("api/tasks/create-task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task }),
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Could not add task");
        }
        
        getTasks();
      } catch (error) {
        console.error(error);
      }
    },
    [getTasks]
  );

  const updateStatus = useCallback(
    async (id,status) => {
      try {
        console.log(id,status)
        const response = await fetch(`api/tasks/update-status/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Could not update status");
        }
        getTasks();
      } catch (error) {
        console.error(error);
      }
    },
    [getTasks]
  );

  const deleteTask = useCallback(
    async (id) => {
      try {
        const response = await fetch(`api/tasks/remove-task/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Could not delete task");
        }
        getTasks();
      } catch (error) {
        console.error(error);
      }
    },
    [getTasks]
  );

  return (
    <taskContext.Provider
      value={{ addTask, getTasks, tasks, updateStatus, deleteTask }}
    >
      {children}
    </taskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(taskContext);
};

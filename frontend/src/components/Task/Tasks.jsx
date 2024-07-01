import { useEffect } from "react";
import { useTask } from "../hooks/uesTask";
import { Task } from "./Task";

export const Tasks = () => {
  const { getTasks,tasks } = useTask();
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="w-1/2 flex flex-col gap-3 mt-4 max-h-[450px] overflow-y-auto">
      {tasks.map((task) => (
        <Task key={task._id} task={task.task} status={task.status} />
      ))}
    </div>
  );
};

import { useEffect } from "react";

import { Task } from "./Task";
import { useTask } from "../context/taskContext";

export const Tasks = () => {
  const { getTasks,tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <div className="w-1/2 flex flex-col gap-3 mt-4 max-h-[450px] overflow-y-auto">
      {tasks.map((task) => (
        <Task key={task._id} task={task.task} id={task._id} status={task.status} />
      ))}
    </div>
  );
};

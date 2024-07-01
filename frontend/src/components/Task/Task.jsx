import { useTask } from "../context/taskContext"

export const Task = (task) => {
  const {updateStatus,deleteTask}=useTask();
  const handleStatus = async (e)=>{
    console.log(e.target.checked,task.id);
    await updateStatus(task.id,e.target.checked);
  }
  const handleDelete = async ()=>{
    await deleteTask(task.id);
  }
  return (
    <div className="p-2 flex w-full justify-between bg-[#1d232a] rounded">
        <div className='flex gap-3'>
          <input onChange={handleStatus} checked={task.status} type="checkbox" />
          <p className={task.status ? 'line-through' : ''}>{task.task}</p>
        </div>
        <button onClick={handleDelete}>D</button>
      </div>
  )
}

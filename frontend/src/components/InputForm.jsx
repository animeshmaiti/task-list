import { useState } from 'react';
import { useTask } from './hooks/uesTask';


export const InputForm = () => {

  const { addTask } = useTask();
  const[task,setTask]= useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    await addTask(task);
    setTask('');
  }

  return (
      <form onSubmit={handleSubmit} className='w-1/2 flex justify-center gap-2'>
        <input
          onChange={(e)=>setTask(e.target.value)}
          type='text'
          value={task}
          placeholder='Type here'
          className='input input-bordered w-full max-w-xs'
        />
        <button type='submit' className='btn btn-outline btn-primary w-20'>Add</button>
      </form>
  );
};

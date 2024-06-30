
export const Task = ({task,staus}) => {
  return (
    <div className="p-2 flex w-full justify-between bg-[#1d232a] rounded">
        <div className='flex gap-3'>
          <input type="checkbox" />
          <p>{task}</p>
        </div>
        <button>D</button>
      </div>
  )
}

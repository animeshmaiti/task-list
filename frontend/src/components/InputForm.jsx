export const InputForm = () => {
  return (
      <form className='w-1/2 flex justify-center gap-2'>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full max-w-xs'
        />
        <button type='submit' className='btn btn-outline btn-primary w-20'>Add</button>
      </form>
  );
};

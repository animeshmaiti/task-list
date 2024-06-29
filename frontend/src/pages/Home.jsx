import { InputForm } from "../components/InputForm";
import { Tasks } from "../components/Task/Tasks";

export const Home = () => {
  return (
    <div className='flex-1'>
      <div className='p-4 flex flex-col w-screen items-center'>
        <InputForm />
        <Tasks />
      </div>
    </div>
  );
};

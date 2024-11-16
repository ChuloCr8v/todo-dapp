import AddTaskForm from "@/components/AddTaskForm";
import Tasks from "@/components/Tasks";
import useGetTasks from "@/hooks/useGetTasks";
import { twMerge } from "tailwind-merge";

const Home = () => {
  const { isGettingTasks, tasks } = useGetTasks();

  return (
    <div
      className={twMerge(
        "pt-[calc(100vw-80%)] relative h-full w-full flex flex-col items-center justify-center gap-6",
        (isGettingTasks || tasks.length === 0) && "pt-0 -mt-4"
      )}
    >
      <div className="text-center ">
        <p className=" bg-gradient-to-r from-white via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl">
          Todo Dapp
        </p>
        <p className="text-gray-200 capitalize">Engrave your tasks on the blockchain</p>
      </div>
      <Tasks />

      <AddTaskForm />
    </div>
  );
};

export default Home;

import useConnectAccount from "@/hooks/useConnectAccount";
import useContract from "@/hooks/useContract";
import useGetTasks from "@/hooks/useGetTasks";
import { Button, Empty, message, Spin } from "antd";
import dayjs from "dayjs";
// import { motion } from "framer-motion";
import { useState } from "react";
import { FaBan } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const Tasks = () => {
  const { tasks, isGettingTasks, getTasks } = useGetTasks();
  const [isLoading, setIsLoading] = useState<number | null>(null);
  // const [taskTodelete, setTaskToDelete] = useState<number | null>(null);
  // const [isDeletingTask, setIsDeletingTask] = useState<number | null>(null);

  const { connectedAccount } = useConnectAccount();
  const { contract } = useContract();

  if (isGettingTasks) {
    return (
      <div className="">
        <Spin />
      </div>
    );
  }

  if (!tasks.length) {
    return (
      <div className="bg-white/10 backdrop-blur-sm border p-4 rounded-md mt-12">
        <Empty />
        <span className="text-white"> You currently have no tasks</span>
      </div>
    );
  }
  console.log(tasks);

  const markTaskCompleted = async (id: number) => {
    setIsLoading(id);
    try {
      await contract.methods
        .updateTaskStatus(BigInt(id) - BigInt(1))
        .send({ from: connectedAccount });
      message.success("Task marked as completed.");
      getTasks();
    } catch (error) {
      message.error("Unable to update status, please try again.");
      console.log(error);
    }
    setIsLoading(null);
  };

  // const handleClick = (id: number) => {
  //   console.log(id);
  //   setTaskToDelete(id);
  // };

  // const deleteTask = async (id: number) => {
  //   setIsDeletingTask(id);
  //   try {
  //     const res = await contract.methods
  //       .deleteTask(BigInt(id) - BigInt(1))
  //       .send({ from: connectedAccount });
  //     console.log(res);
  //     message.success("Task deleted successfuly");
  //     getTasks();
  //     // window.location.reload();
  //   } catch (error) {
  //     message.error("Unable to delete task, please try again.");
  //     console.log(error);
  //   }
  //   setIsDeletingTask(null);
  // };

  return (
    <div className=" w-full h-full flex flex-col items-center justify-start gap-4 pb-56">
      {tasks?.map((item) => (
        <div
          className="w-[500px] relative flex flex-col justify-center items-center"
          // onClick={() => handleClick(item.id)}
          // onMouseLeave={() => {
          //   !isDeletingTask && handleClick(0);
          // }}
        >
          <div
            key={item.id}
            className="cursor-pointer bg-white/10 backdrop-blur-3xl max-w-[500px] w-full flex items-center justify-between p-4 border rounded-md border-white/40"
          >
            <div className="">
              <p className="text-white capitalize font-semibold text-lg">
                {item.task}
              </p>
              <p className="text-white/60 text-sm">
                {item.time
                  ? dayjs(
                      new Date(Number(item.time) * 1000).toISOString()
                    ).format("DD MMM YYYY hh:mm A")
                  : null}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              {isLoading === item.id ? (
                <Spin />
              ) : (
                <div className="space-y-2 flex flex-col items-center justify-center">
                  <p
                    className={twMerge(
                      "capitalize w-fit bg-red-600/10 text-xs text-red-400 border border-red-400 px-2 py-1 rounded-full flex items-center gap-1",
                      item.isCompleted &&
                        "border-green-600 bg-green-600/10 text-green-400"
                    )}
                  >
                    {item.isCompleted ? <FaRegCircleCheck /> : <FaBan />}{" "}
                    {item.isCompleted ? "Completed" : "Not Completed"}
                  </p>

                  {!item.isCompleted && (
                    <Button
                      onClick={() => markTaskCompleted(item.id)}
                      size="small"
                      className={twMerge("bg-green-600/20 text-white text-xs")}
                    >
                      Mark {item.isCompleted ? "Ongoing" : "completed"}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* {taskTodelete === item.id && (
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="absolute -right-10 -z-0 bg-red-600/30 text-red-400 backdrop-blur-3xl  flex items-center justify-between p-4 border rounded-md border-white/40"
            >
              {isDeletingTask === item.id ? (
                <Spin />
              ) : (
                <FaTrashCan
                  className=" cursor-pointer"
                  onClick={() => deleteTask(item.id)}
                />
              )}
            </motion.div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default Tasks;

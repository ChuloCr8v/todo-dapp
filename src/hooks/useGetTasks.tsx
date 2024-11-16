import { useEffect, useState } from "react";
import useConnectAccount from "./useConnectAccount";
import useContract from "./useContract";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../redux/taskSlice";
import { TaskDataType } from "@/types";

const useGetTasks = () => {
  const [isGettingTasks, setIsGettingTasks] = useState(false);

  const { tasks } = useSelector(
    (state: { tasks: { tasks: TaskDataType[] } }) => state.tasks
  );

  const { contract } = useContract();
  const { connectedAccount } = useConnectAccount();

  const dispatch = useDispatch();

  useEffect(() => {
    getTasks();
  }, [connectedAccount]);

  const getTasks = async () => {
    setIsGettingTasks(true);

    try {
      const allTasks = await contract.methods
        .listTasks(connectedAccount)
        .call({ from: connectedAccount });
      dispatch(getAllTasks(allTasks));

      console.log(allTasks);
    } catch (error) {
      console.log(error);
    }
    setIsGettingTasks(false);
  };

  return { tasks, isGettingTasks, getTasks };
};

export default useGetTasks;

import { useState } from "react";
import { useDispatch } from "react-redux";
import useConnectAccount from "./useConnectAccount";
import useContract from "./useContract";
import { addNewTask } from "@/redux/taskSlice";

const useAddTask = () => {
  const [task, setTask] = useState("");
  const [addingTask, setAddingTask] = useState(false);

  const { contract } = useContract();
  const { connectedAccount } = useConnectAccount();

  const dispatch = useDispatch();

  const addTask = async () => {
    setAddingTask(true);
    try {
      const newTask = await contract.methods
        .addTask(task)
        .send({ from: connectedAccount });

      dispatch(addNewTask(newTask));
      setTask("");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    setAddingTask(false);
  };

  return { addTask, task, addingTask, setTask };
};

export default useAddTask;

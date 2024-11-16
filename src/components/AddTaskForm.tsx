import useConnectAccount from "@/hooks/useConnectAccount";
import useContract from "@/hooks/useContract";
import useGetTasks from "@/hooks/useGetTasks";
import { addNewTask } from "@/redux/taskSlice";
import { Button, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const [addingTask, setAddingTask] = useState(false);
  const [form] = useForm();
  const { getTasks } = useGetTasks();

  const { contract } = useContract();
  const { connectedAccount } = useConnectAccount();

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setAddingTask(true);
    try {
      const newTask = await contract.methods
        .addTask(task)
        .send({ from: connectedAccount });
      console.log(newTask);
      dispatch(addNewTask(newTask));
      setTask("");
      message.success("Task added successfully!");
      getTasks();
    } catch (error) {
      console.log(error);
      message.error("Failed to add task. Please try again.");
    }
    setAddingTask(false);
  };

  useEffect(() => {}, [form]);

  return (
    <div className="w-screen backdrop-blur-sm fixed z-[999] bottom-0 pb-10 flex flex-col items-center justify-center">
      <Form className="w-full flex flex-col justify-center items-center">
        <Form.Item className="flex flex-col items-center gap-4">
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-[500px] h-16 backdrop-blur-lg bg-white/10 rounded-full text-white text-xl px-6"
          />
          <Button
            onClick={handleSubmit}
            disabled={task === ""}
            icon={<FaPaperPlane />}
            loading={addingTask}
            className="rounded-full h-16 !w-16 text-2xl ml-4 backdrop-blur-lg bg-white/10 text-white hover:!bg-white/30"
          ></Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTaskForm;

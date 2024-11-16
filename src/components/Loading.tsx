import { Spin } from "antd";

export const Loading = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-white rounded-[1.6rem]">
      <Spin />
    </div>
  );
};

import { Button } from "antd";
import useConnectAccount from "../hooks/useConnectAccount";
import { useNavigate } from "react-router-dom";

const ConnectAccount = () => {
  const { connectedAccount, connectingAccount, handleConnectAccount } =
    useConnectAccount();

  const navigate = useNavigate();

  if (connectedAccount) {
    navigate("/home");
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-10 flex flex-col items-center justify-center blur-card shadow-2xl">
        <img src="/not-connected.png" alt="connect account" className="mb-6" />
        <p className="text-gray-400">
          <span className="block text-center text-teal-500 font-semibold text-xl">
            Not Connected.
          </span>{" "}
          Click on the button below to connect your account.
        </p>
        <Button
          loading={connectingAccount}
          className="mt-4 bg-teal-500 border-none hover:!bg-teal-700 !text-white font-semibold"
          onClick={handleConnectAccount}
        >
          Connect Account
        </Button>
      </div>
    </div>
  );
};

export default ConnectAccount;

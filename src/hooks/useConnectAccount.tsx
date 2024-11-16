import { message } from "antd";
import { useState } from "react";
import Web3 from "web3";
import useDetectCurrentProvider from "./useDetectCurrentProvider";
import { useDispatch, useSelector } from "react-redux";
import { setConnectedAccount } from "../redux/authSlice";

const useConnectAccount = () => {
  const [connectingAccount, setConnectingAccount] = useState(false);

  const { connectedAccount } = useSelector(
    (state: { auth: { connectedAccount: string } }) => state.auth
  );

  const dispatch = useDispatch();

  const { detectCurrentProvider } = useDetectCurrentProvider();

  const handleConnectAccount = async () => {
    setConnectingAccount(true);
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const accounts = await web3.eth.getAccounts();
        const userAccount = accounts[0];

        dispatch(setConnectedAccount(userAccount));
        console.log(connectedAccount);
      }
      message.success("Account connected successfully");
    } catch (error) {
      console.log(error);
    }
    setConnectingAccount(false);
  };

  return { handleConnectAccount, connectingAccount, connectedAccount };
};

export default useConnectAccount;

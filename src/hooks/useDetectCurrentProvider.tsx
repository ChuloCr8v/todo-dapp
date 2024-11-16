import { message } from "antd";

const useDetectCurrentProvider = () => {
  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non ethereum browser detected, please install Metamask");
      message.error("Non ethereum browser detected, please install Metamask");
    }

    return provider;
  };

  return { detectCurrentProvider };
};

export default useDetectCurrentProvider;

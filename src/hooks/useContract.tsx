import Web3 from "web3";
import contractAbi from "../abi.json";

const useContract = () => {
  const contractAddress = "0xb5C876C25523b2681329263a966477962cdd8327";

  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(contractAbi, contractAddress);

  return { contract };
};

export default useContract;

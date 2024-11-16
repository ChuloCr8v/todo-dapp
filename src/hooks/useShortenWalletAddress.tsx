const useShortenWalletAddress = (address: string) => {
  const firstAddress = address?.slice(0, 7);
  const secondAddress = address?.slice(38);

  const shortenedAddress = firstAddress + "..." + secondAddress;

  return { shortenedAddress };
};

export default useShortenWalletAddress;

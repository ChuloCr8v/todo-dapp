import useConnectAccount from "@/hooks/useConnectAccount";
import { lazy, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const UserPages = lazy(() => import("../views/UserPages"));
const ConnectAccount = lazy(() => import("../views/ConnectAccount"));

const AppRoutes = () => {
  const { connectedAccount } = useConnectAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (!connectedAccount) {
      navigate("/connect");
    }
  }, [connectedAccount]);

  console.log(connectedAccount);

  return (
    <Routes>
      <Route path="/connect" element={<ConnectAccount />} />
      <Route path="/*" element={<UserPages />} />
    </Routes>
  );
};

export default AppRoutes;

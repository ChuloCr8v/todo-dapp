import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default ProtectedRoutes;

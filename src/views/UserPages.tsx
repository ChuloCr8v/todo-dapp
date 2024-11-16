import Layout from '../layout/Layout'
import ProtectedRoutes from "./ProtectedRoutes";

const UserPages = () => {
  return (
    <Layout>
      <ProtectedRoutes />
    </Layout>
  );
};

export default UserPages;

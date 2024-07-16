import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import PropTypes from "prop-types";

const PrivateRouter = ({ requiredRole, children }) => {
  const { currentUser, userRole } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" />; // Or another appropriate route/page
  }

  return children;
};

PrivateRouter.propTypes = {
  requiredRole: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default PrivateRouter;

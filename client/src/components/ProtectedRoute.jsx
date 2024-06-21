import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from "../store/auth";

const ProtectedRoute = ( {children} ) => {

  const { token } = useAuthStore();

  const location = useLocation();


  if (!token) {   
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
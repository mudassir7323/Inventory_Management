import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("UserloginToken");

//   return (isAuthenticated) ? element : <Navigate to="/Login" />;

return (false) ? element : <Navigate to="/Login" />;
};

export default ProtectedRoute;

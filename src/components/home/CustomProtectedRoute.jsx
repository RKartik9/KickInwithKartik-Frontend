// CustomProtectedRoute.js

import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomProtectedRoute = ({
  element: Component,
  adminRoute,
  redirectAdmin,
  ...rest
}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  // Check if the user is authenticated and the route requires authentication
  if (!isAuthenticated && !adminRoute) {
    return <Navigate to="/login" />;
  }

  // Check if the route requires admin privileges
  if (adminRoute && (!isAuthenticated || !user || user.role !== "admin")) {
    return <Navigate to={redirectAdmin || "/login"} />;
  }

  return <Component />;
};

export default CustomProtectedRoute;

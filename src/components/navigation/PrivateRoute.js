import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, isSignedIn }) {
  return isSignedIn ? children : <Navigate to="/signIn" />;
}

export default PrivateRoute;
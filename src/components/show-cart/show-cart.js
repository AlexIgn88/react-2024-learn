"use client";

import { useAuth } from "../auth-context/use-auth.js";

const ShowCart = ({ children }) => {
  const {
    user: { isAuthorized },
  } = useAuth();

  if (isAuthorized) {
    return children;
  } else {
    return null;
  }
};

export default ShowCart;

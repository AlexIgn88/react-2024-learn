"use client";

import { useAuth } from "../auth-context/use-auth.js";
import Cart from "../cart/cart.jsx";

const ShowCart = () => {
  const {
    user: { isAuthorized },
  } = useAuth();

  if (isAuthorized) {
    return <Cart />;
  } else {
    return null;
  }
};

export default ShowCart;

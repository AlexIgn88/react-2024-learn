import { useState } from "react";
import { AuthContext } from ".";
import { defaultUserObject } from "./auth-consts.js";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUserObject);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

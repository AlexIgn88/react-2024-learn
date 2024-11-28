import { useState } from "react";
import { UserContext } from ".";
import { defaultUserObject } from "./user-consts.js";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUserObject);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

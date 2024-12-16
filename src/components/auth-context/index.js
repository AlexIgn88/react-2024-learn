import { createContext } from "react";
import { defaultUserObject } from "./auth-consts.js";

export const AuthContext = createContext({
  user: defaultUserObject,
});

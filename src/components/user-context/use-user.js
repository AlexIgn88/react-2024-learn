import { useContext } from "react";
import { UserContext } from ".";

export const useUser = () => useContext(UserContext);

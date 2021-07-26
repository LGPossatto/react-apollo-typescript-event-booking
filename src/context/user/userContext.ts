import { createContext } from "react";
import { TUser } from "../../graphql/types";

export interface IContext {
  user: TUser | null;
  loginUser: (user: TUser) => void;
  logoutUser: () => void;
}

const defaultUser: IContext = {
  user: null,
  loginUser: (user) => {},
  logoutUser: () => {},
};

const userContext = createContext(defaultUser);

export default userContext;

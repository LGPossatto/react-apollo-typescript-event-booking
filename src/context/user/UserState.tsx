import { useReducer } from "react";

import { TUser } from "../../graphql/types";
import { LOGIN_USER, LOGOUT_USER } from "../types";

import UserContext from "./userContext";
import userReducer from "./userReducer";

export interface IState {
  user: TUser | null;
}

const UserState = (props: any) => {
  const inicialState: IState = {
    user: null,
  };

  const [state, dispatch] = useReducer(userReducer, inicialState);

  const loginUser = (user: TUser) => {
    dispatch({ type: LOGIN_USER, payload: user });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER, payload: null });
  };

  return (
    <UserContext.Provider value={{ user: state.user, loginUser, logoutUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;

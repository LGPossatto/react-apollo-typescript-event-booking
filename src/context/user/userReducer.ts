import { LOGIN_USER, LOGOUT_USER } from "../types";
import { IState } from "./UserState";

const userReducer = (state: IState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;

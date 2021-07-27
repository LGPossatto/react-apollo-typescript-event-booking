import { UPDATE_EVENTS, ADD_EVENTS } from "../types";
import { IState } from "./EventsState";

const userReducer = (state: IState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case UPDATE_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case ADD_EVENTS:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;

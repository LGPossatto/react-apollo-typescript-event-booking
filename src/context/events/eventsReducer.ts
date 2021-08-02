import {
  UPDATE_EVENTS,
  ADD_EVENTS,
  SELECT_EVENT,
  DESELECT_EVENT,
} from "../types";
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
    case SELECT_EVENT:
      const sEvent = state.events.find((event) => event._id === action.payload);
      if (sEvent) {
        return {
          ...state,
          selectedEvent: sEvent,
        };
      } else {
        return state;
      }
    case DESELECT_EVENT:
      return {
        ...state,
        selectedEvent: null,
      };
    default:
      return state;
  }
};

export default userReducer;

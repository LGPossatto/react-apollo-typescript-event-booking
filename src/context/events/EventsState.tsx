import { useReducer } from "react";

import { TEvents } from "../../graphql/types";
import { ADD_EVENTS, UPDATE_EVENTS } from "../types";

import EventsContext from "./eventsContext";
import eventsReducer from "./eventsReducer";

export interface IState {
  events: TEvents[];
}

const EventsState = (props: any) => {
  const inicialState: IState = {
    events: [],
  };

  const [state, dispatch] = useReducer(eventsReducer, inicialState);

  const updateEvents = (events: TEvents[]) => {
    dispatch({ type: UPDATE_EVENTS, payload: events });
  };

  const addEvent = (event: TEvents) => {
    dispatch({ type: ADD_EVENTS, payload: event });
  };

  return (
    <EventsContext.Provider
      value={{ events: state.events, updateEvents, addEvent }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};

export default EventsState;

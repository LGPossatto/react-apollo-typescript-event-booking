import { useReducer } from "react";

import { TEvent } from "../../graphql/types";
import {
  ADD_EVENTS,
  UPDATE_EVENTS,
  SELECT_EVENT,
  DESELECT_EVENT,
} from "../types";

import EventsContext from "./eventsContext";
import eventsReducer from "./eventsReducer";

export interface IState {
  events: TEvent[];
  selectedEvent: TEvent | null;
}

const EventsState = (props: any) => {
  const inicialState: IState = {
    events: [],
    selectedEvent: null,
  };

  const [state, dispatch] = useReducer(eventsReducer, inicialState);

  const updateEvents = (events: TEvent[]) => {
    dispatch({ type: UPDATE_EVENTS, payload: events });
  };

  const addEvent = (event: TEvent) => {
    dispatch({ type: ADD_EVENTS, payload: event });
  };

  const selectEvent = (eventId: string) => {
    dispatch({ type: SELECT_EVENT, payload: eventId });
  };

  const deselectEvent = () => {
    dispatch({ type: DESELECT_EVENT, payload: null });
  };

  return (
    <EventsContext.Provider
      value={{
        events: state.events,
        updateEvents,
        addEvent,
        selectedEvent: state.selectedEvent,
        selectEvent,
        deselectEvent,
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};

export default EventsState;

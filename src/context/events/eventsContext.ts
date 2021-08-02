import { createContext } from "react";
import { TEvent } from "../../graphql/types";

export interface IContext {
  events: TEvent[];
  updateEvents: (events: TEvent[]) => void;
  addEvent: (event: TEvent) => void;
  selectedEvent: TEvent | null;
  selectEvent: (eventId: string) => void;
  deselectEvent: () => void;
}

const defaultUser: IContext = {
  events: [],
  selectedEvent: null,
  updateEvents: (events) => {},
  addEvent: (event) => {},
  selectEvent: (eventId: string) => {},
  deselectEvent: () => {},
};

const eventsContext = createContext(defaultUser);

export default eventsContext;

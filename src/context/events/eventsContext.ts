import { createContext } from "react";
import { TEvents } from "../../graphql/types";

export interface IContext {
  events: TEvents[];
  updateEvents: (events: TEvents[]) => void;
  addEvent: (event: TEvents) => void;
}

const defaultUser: IContext = {
  events: [],
  updateEvents: (events) => {},
  addEvent: (event) => {},
};

const eventsContext = createContext(defaultUser);

export default eventsContext;

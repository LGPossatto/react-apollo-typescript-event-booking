import { TEvents } from "../../graphql/types";

import "./eventsList.style.scss";
import EventsItem from "../eventsItem/EventsItem.component";

export interface IEventsList {
  events: TEvents[];
}

const EventsList = ({ events }: { events: TEvents[] }) => {
  return (
    <ul className="events-list flex jc-c flex-fw-w">
      {events.map(({ _id, title, description, price }) => {
        return (
          <EventsItem
            key={_id}
            title={title}
            price={price}
            description={description}
          ></EventsItem>
        );
      })}
    </ul>
  );
};

export default EventsList;

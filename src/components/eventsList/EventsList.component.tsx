import { TEvents } from "../../graphql/types";

import "./eventsList.style.scss";
import EventsItem from "../eventsItem/EventsItem.component";

export interface IEventsList {
  events: TEvents[];
}

const EventsList = ({ events }: { events: TEvents[] }) => {
  return (
    <ul className="events-list flex jc-c flex-fw-w">
      {events.map(({ _id, title, description, price, date, creator }) => {
        return (
          <EventsItem
            userId={creator._id}
            key={_id}
            title={title}
            price={price}
            date={date}
            description={description}
          ></EventsItem>
        );
      })}
    </ul>
  );
};

export default EventsList;

import { Dispatch, FC, SetStateAction } from "react";

import { TEvent } from "../../../graphql/types";

import "./eventsList.style.scss";
import EventsItem from "../eventsItem/EventsItem.component";

export interface IEventsList {
  events: TEvent[];
  setBookEvent: Dispatch<SetStateAction<boolean>>;
}

const EventsList: FC<IEventsList> = ({ events, setBookEvent }) => {
  return (
    <ul className="events-list flex jc-c flex-fw-w">
      {events.map(({ _id, title, description, price, date, creator }) => {
        return (
          <EventsItem
            key={_id}
            eventId={_id}
            title={title}
            price={price}
            date={date}
            description={description}
            setBookEvent={setBookEvent}
            userId={creator._id}
          ></EventsItem>
        );
      })}
    </ul>
  );
};

export default EventsList;

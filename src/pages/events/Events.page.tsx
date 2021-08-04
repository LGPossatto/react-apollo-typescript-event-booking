import { useContext, useState, useEffect } from "react";

import userContext from "../../context/user/userContext";
import eventsContext from "../../context/events/eventsContext";

import eventsQuery from "../../graphql/queries/events.query";

import "./events.style.scss";
import ModalCreateEvents from "../../components/modal/modal-create-events/ModalCreateEvents.component";
import ModalBooking from "../../components/modal/modal-booking/ModalBooking.component";
import EventsList from "../../components/events/eventsList/EventsList.component";
import Spinner from "../../components/spinner/Spinner.component";

const Events = () => {
  const { user } = useContext(userContext);
  const { events, updateEvents } = useContext(eventsContext);

  const [isLoading, setIsLoading] = useState(false);
  const [createEvent, setCreateEvent] = useState(false);
  const [bookEvent, setBookEvent] = useState(false);

  const getEvents = async () => {
    try {
      setIsLoading(true);
      const events = (await eventsQuery()).data;
      updateEvents(events.events);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="events">
      {createEvent && (
        <ModalCreateEvents setCreateEvent={setCreateEvent}></ModalCreateEvents>
      )}
      {bookEvent && <ModalBooking setBookEvent={setBookEvent}></ModalBooking>}
      {user && (
        <>
          <h3 className="fs-med">Share Your Own Events Here!</h3>
          <button
            className="btn-component fs-small fc-light"
            onClick={() => setCreateEvent(true)}
          >
            Create Event
          </button>
        </>
      )}
      {events && (
        <EventsList events={events} setBookEvent={setBookEvent}></EventsList>
      )}
    </div>
  );
};

export default Events;

import { useContext, useRef, useState, useEffect } from "react";

import userContext from "../../context/user/userContext";
import eventsContext from "../../context/events/eventsContext";

import { clearError, showError } from "../../assets/scripts/utils.script";
import createEventMutation from "../../graphql/mutations/createEvent.mutation";
import eventsQuery from "../../graphql/queries/events.query";

import "./events.style.scss";
import Modal from "../../components/modal/Modal.component";
import EventsList from "../../components/eventsList/EventsList.component";

const Events = () => {
  const [createEvent, setCreateEvent] = useState(false);
  const { user } = useContext(userContext);
  const { events, updateEvents, addEvent } = useContext(eventsContext);

  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const errordRef = useRef<HTMLDivElement>(null);

  const handleConfirm = async () => {
    try {
      clearError(errordRef);

      const title = titleRef.current?.value;
      const price = parseFloat(priceRef.current!.value);
      const date = dateRef.current?.value;
      const description = descriptionRef.current?.value;

      if (isNaN(price)) {
        throw new Error("Price must be a number!");
      } else if (price <= 0) {
        throw new Error("Price must be greater than zero!");
      }

      if (title && price && date && description) {
        setCreateEvent(false);
        const data = await createEventMutation(
          title,
          price,
          new Date(date),
          description,
          user!.token
        );

        addEvent(data.data.createEvent);
      } else {
        throw new Error("Please leave no enpty field!");
      }
    } catch (err) {
      showError(errordRef, err.message);
    }
  };

  const getEvents = async () => {
    try {
      const events = (await eventsQuery()).data;
      updateEvents(events.events);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="events">
      {createEvent && (
        <Modal
          title="Add Event"
          canConfirm
          onConfirm={handleConfirm}
          canCancel
          onCancel={() => setCreateEvent(false)}
        >
          <form action="">
            <div className="input-component">
              <label htmlFor="title" className="fs-med">
                Title
              </label>
              <input type="text" id="title" className="fs-med" ref={titleRef} />
            </div>
            <div className="input-component">
              <label htmlFor="price" className="fs-med">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="fs-med"
                ref={priceRef}
              />
            </div>
            <div className="input-component">
              <label htmlFor="date" className="fs-med">
                Date
              </label>
              <input type="date" id="date" className="fs-med" ref={dateRef} />
            </div>
            <div className="input-component">
              <label htmlFor="description" className="fs-med">
                Description
              </label>
              <textarea
                id="description"
                className="fs-med"
                ref={descriptionRef}
              />
            </div>
            <div
              className="error-component fs-small fc-danger"
              ref={errordRef}
            ></div>
          </form>
        </Modal>
      )}
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
      {events && <EventsList events={events}></EventsList>}
    </div>
  );
};

export default Events;

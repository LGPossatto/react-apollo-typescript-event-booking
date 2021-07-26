import { useState } from "react";

import "./events.style.scss";
import Modal from "../../components/modal/Modal.component";

const Events = () => {
  const [createEvent, setCreateEvent] = useState(false);

  return (
    <div className="events">
      {createEvent && (
        <Modal
          title="test"
          canConfirm
          onConfirm={() => setCreateEvent(false)}
          canCancel
          onCancel={() => setCreateEvent(false)}
        ></Modal>
      )}
      <h3 className="fs-med">Share Your Own Events Here!</h3>
      <button
        className="btn-component fs-small fc-light"
        onClick={() => setCreateEvent(true)}
      >
        Create Event
      </button>
    </div>
  );
};

export default Events;

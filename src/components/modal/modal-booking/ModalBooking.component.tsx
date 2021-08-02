import { FC, useContext } from "react";

import userContext from "../../../context/user/userContext";
import eventsContext from "../../../context/events/eventsContext";

import bookEventMutation from "../../../graphql/mutations/bookEvent.mutation";

import "./modalBooking.style.scss";
import Modal from "../Modal.component";

export interface IModalCreateEvents {
  setBookEvent: (arg: boolean) => void;
}

const ModalCreateEvents: FC<IModalCreateEvents> = ({ setBookEvent }) => {
  const { user } = useContext(userContext);
  const { selectedEvent } = useContext(eventsContext);

  const handleConfirm = () => {
    try {
      if (selectedEvent && user) {
        bookEventMutation(selectedEvent._id, user.token);
        setBookEvent(false);
      } else {
        throw new Error("Event Does Not Exist! / You Must Be Logged In!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal
      title={selectedEvent?.title || "Not Found"}
      confirmText="Book"
      canConfirm
      onConfirm={handleConfirm}
      canCancel
      onCancel={() => setBookEvent(false)}
    >
      {selectedEvent && (
        <>
          <div className="modal-booking flex flex-fw-w ai-c">
            <h2 className="fs-big">${selectedEvent.price}</h2>
            <span className="fs-small">
              {new Date(selectedEvent.date).toLocaleDateString()}
            </span>
          </div>
          <p className="fs-med">{selectedEvent.description}</p>
        </>
      )}
    </Modal>
  );
};

export default ModalCreateEvents;

import { FC, useContext, useRef } from "react";

import userContext from "../../../context/user/userContext";
import eventsContext from "../../../context/events/eventsContext";

import createEventMutation from "../../../graphql/mutations/createEvent.mutation";
import { clearError, showError } from "../../../assets/scripts/utils.script";

import "./modalCreateEvents.style.scss";
import Modal from "../Modal.component";

export interface IModalCreateEvents {
  setCreateEvent: (arg: boolean) => void;
}

const ModalCreateEvents: FC<IModalCreateEvents> = ({ setCreateEvent }) => {
  const { user } = useContext(userContext);
  const { addEvent } = useContext(eventsContext);

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

  return (
    <Modal
      title="Add Event"
      confirmText="Confirm"
      canConfirm
      onConfirm={handleConfirm}
      canCancel
      onCancel={() => setCreateEvent(false)}
    >
      <form>
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
          <input type="number" id="price" className="fs-med" ref={priceRef} />
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
          <textarea id="description" className="fs-med" ref={descriptionRef} />
        </div>
        <div
          className="error-component fs-small fc-danger"
          ref={errordRef}
        ></div>
      </form>
    </Modal>
  );
};

export default ModalCreateEvents;

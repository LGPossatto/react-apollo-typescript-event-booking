import { useContext, FC, Dispatch, SetStateAction } from "react";

import userContext from "../../../context/user/userContext";
import eventsContext from "../../../context/events/eventsContext";

import "./eventsItem.style.scss";
import crownImg from "../../../assets/images/crown.png";

export interface IEventsItem {
  eventId: string;
  title: string;
  price: number;
  date: Date;
  description: string;
  setBookEvent: Dispatch<SetStateAction<boolean>>;
  userId: string;
}

const EventsItem: FC<IEventsItem> = ({
  eventId,
  title,
  description,
  price,
  date,
  setBookEvent,
  userId,
}) => {
  const { user } = useContext(userContext);
  const { selectEvent } = useContext(eventsContext);

  return (
    <li className="events-item">
      <div className="flex ai-c jc-sb">
        <h1 className="fs-big"> {title} </h1>
        <div className="events-item__actions flex ai-c">
          {user?.userId === userId ? (
            <img src={crownImg} alt="crown" />
          ) : (
            <button
              className="btn-component"
              onClick={() => {
                selectEvent(eventId);
                setBookEvent(true);
              }}
            >
              <span></span>
              <span></span>
            </button>
          )}
        </div>
      </div>
      <div className="events-item__desc flex flex-fd-c jc-sb">
        <span className="fs-smaller">
          {new Date(date).toLocaleDateString()}
        </span>
        <p className="fs-small">{description}</p>
        <h2 className="fs-med">${price}</h2>
      </div>
    </li>
  );
};

export default EventsItem;

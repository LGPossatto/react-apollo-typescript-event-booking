import { FC, useContext } from "react";

import "./eventsItem.style.scss";
import crownImg from "../../assets/images/crown.png";
import userContext from "../../context/user/userContext";

export interface IEventsItem {
  userId: string;
  title: string;
  price: number;
  date: Date;
  description: string;
}

const EventsItem: FC<IEventsItem> = ({
  userId,
  title,
  description,
  price,
  date,
}) => {
  const { user } = useContext(userContext);

  return (
    <li className="events-item">
      <div className="flex ai-c jc-sb">
        <h1 className="fs-big"> {title} </h1>
        <div className="events-item__actions flex ai-c">
          {user?.userId === userId ? (
            <img src={crownImg} alt="crown" />
          ) : (
            <button className="btn-component">
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

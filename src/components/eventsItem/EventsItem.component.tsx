import { FC } from "react";

import "./eventsItem.style.scss";
import crownImg from "../../assets/images/crown.png";

export interface IEventsItem {
  title: string;
  price: number;
  description: string;
}

const EventsItem: FC<IEventsItem> = ({ title, description, price }) => {
  return (
    <li className="events-item">
      <div className="flex ai-c jc-sb">
        <h1 className="fs-big"> {title} </h1>
        <div className="events-item__actions flex ai-c">
          <img src={crownImg} alt="crown" />
          <button className="btn-component">
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="events-item__desc flex flex-fd-c jc-sb">
        <p className="fs-small">{description}</p>
        <h2 className="fs-med">${price}</h2>
      </div>
    </li>
  );
};

export default EventsItem;

import { FC } from "react";
import "./bookingItem.style.scss";

export interface IBookingItem {
  title: string;
  bookingId: string;
  onClick: (bookingId: string) => void;
}

const BookingItem: FC<IBookingItem> = ({ title, bookingId, onClick }) => {
  return (
    <li className="bookings-item flex jc-sb ai-c">
      <div className="bookings-item__info">
        <h2 className="fs-big">{title}</h2>
      </div>
      <div className="bookings-item__action">
        <button
          className="btn-component fs-med fc-light"
          onClick={() => onClick(bookingId)}
        >
          Cancel
        </button>
      </div>
    </li>
  );
};

export default BookingItem;

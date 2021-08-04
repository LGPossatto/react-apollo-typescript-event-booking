import { FC } from "react";

import "./bookingsList.style.scss";
import BookingsItem from "../bookings-item/BookingItem.component";

export interface IBookings {
  _id: string;
  event: {
    _id: string;
    title: string;
  };
}

export interface IBookingsList {
  bookings: IBookings[];
  onClick: (bookingId: string) => void;
}

const BookingsList: FC<IBookingsList> = ({ bookings, onClick }) => {
  return (
    <ul>
      {bookings.map((booking) => {
        return (
          <BookingsItem
            key={booking._id}
            title={booking.event.title}
            bookingId={booking._id}
            onClick={onClick}
          ></BookingsItem>
        );
      })}
    </ul>
  );
};

export default BookingsList;

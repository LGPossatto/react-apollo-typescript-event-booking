import { useContext, useEffect, useState } from "react";

import userContext from "../../context/user/userContext";

import Spinner from "../../components/spinner/Spinner.component";
import bookingsQuery from "../../graphql/queries/bookings.query";
import BookingsList, {
  IBookings,
} from "../../components/bookings/bookings-list/BookingsList.component";
import cancelBookingMutation from "../../graphql/mutations/cancelBooking.mutation";

const Bookings = () => {
  const { user } = useContext(userContext);

  const [isLoading, setIsLoading] = useState(true);
  const [bookings, setBookings] = useState<IBookings[] | []>([]);

  const getBookings = async () => {
    if (user) {
      const data = await bookingsQuery(user.token);
      setBookings(data.data.bookings);
      setIsLoading(false);
    }
  };

  const removeBooking = (bookingId: string) => {
    if (user) {
      cancelBookingMutation(bookingId, user.token);

      const newBookings = bookings.filter(
        (booking) => booking._id !== bookingId
      );
      setBookings(newBookings);
    }
  };

  useEffect(() => {
    getBookings();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <BookingsList bookings={bookings} onClick={removeBooking}></BookingsList>
  );
};

export default Bookings;

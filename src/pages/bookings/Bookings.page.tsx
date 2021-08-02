import { useContext, useEffect, useState } from "react";

import userContext from "../../context/user/userContext";

import Spinner from "../../components/spinner/Spinner.component";
import bookingsQuery from "../../graphql/queries/bookings.query";

const Bookings = () => {
  const { user } = useContext(userContext);

  const [isLoading, setIsLoading] = useState(true);
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    if (user) {
      const data = await bookingsQuery(user.token);
      setBookings(data.data.bookings);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBookings();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return <div>Bookings</div>;
};

export default Bookings;

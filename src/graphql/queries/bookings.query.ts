import { fetchData } from "../../assets/scripts/utils.script";

const bookingsQuery = async (token: string) => {
  const queryBody = {
    query: `
      query qBookings {
        bookings {
          _id
          event {
            _id
            title
          }
        }
      }
    `,
  };

  const data = await fetchData(queryBody, token);
  return data;
};

export default bookingsQuery;

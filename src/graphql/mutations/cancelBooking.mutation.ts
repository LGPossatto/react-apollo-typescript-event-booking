import { fetchData } from "../../assets/scripts/utils.script";

const cancelBookingMutation = async (bookingId: string, token: string) => {
  try {
    const mutationBody = {
      query: `
        mutation {
          cancelBooking(bookingInput: {bookingId: "${bookingId}"}) {
            _id
          }
        }
      `,
    };

    const data = await fetchData(mutationBody, token);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default cancelBookingMutation;

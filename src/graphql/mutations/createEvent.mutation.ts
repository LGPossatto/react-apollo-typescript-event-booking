import { fetchData } from "../../assets/scripts/utils.script";

const createEventMutation = async (
  title: string,
  price: number,
  date: Date,
  description: string,
  token: string
) => {
  try {
    const mutationBody = {
      query: `
      mutation {
        createEvent(
          eventInput: {
            title: "${title}"
            description: "${description}"
            price: ${price}
            date: "${date.toISOString()}"
          }
          ) {
            _id
            title
            description
            date
            price
            creator {
              _id
              email
            }
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

export default createEventMutation;

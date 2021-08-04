import { fetchData } from "../../assets/scripts/utils.script";

const bookEventMutation = async (eventId: string, token: string) => {
  try {
    const mutationBody = {
      query: `
        mutation mBook {
          bookEvent(eventIdInput: {
            eventId: "${eventId}"
          }) {
            _id
            event {
              _id
              title
            }
            user {
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

export default bookEventMutation;

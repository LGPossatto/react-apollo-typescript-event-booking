import { fetchData } from "../../assets/scripts/utils.script";

const eventsQuery = async () => {
  const queryBody = {
    query: `
      query qEvents {
        events {
          _id
          title
          date
          description
          price
          creator {
            _id
            email
          }
        }
      }
    `,
  };

  const data = await fetchData(queryBody);
  return data;
};

export default eventsQuery;

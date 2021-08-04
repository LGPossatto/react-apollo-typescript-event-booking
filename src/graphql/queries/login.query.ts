import { fetchData } from "../../assets/scripts/utils.script";

const loginQuery = async (email: string, password: string) => {
  const queryBody = {
    query: `
      query {
        login(userInput: { email: "${email}", password: "${password}" }) {
          userId
          token
          tokenExpiration
        }
      }
    `,
  };

  const data = await fetchData(queryBody);
  return data;
};

export default loginQuery;

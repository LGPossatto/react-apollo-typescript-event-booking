import { fetchData } from "../../assets/scripts/utils.script";

const createUserMutation = async (email: string, password: string) => {
  const mutationBody = {
    query: `
      mutation {
        createUser(userInput: {
            email: "${email}", 
            password: "${password}"}
        ) {
            _id
            email
        }
      }
    `,
  };

  const data = await fetchData(mutationBody);
  return data;
};

export default createUserMutation;

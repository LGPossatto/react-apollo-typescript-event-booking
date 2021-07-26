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

  const res = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    body: JSON.stringify(mutationBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
};

export default createUserMutation;

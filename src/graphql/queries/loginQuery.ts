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

  const res = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    body: JSON.stringify(queryBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
};

export default loginQuery;

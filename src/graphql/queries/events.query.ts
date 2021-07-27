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

export default eventsQuery;

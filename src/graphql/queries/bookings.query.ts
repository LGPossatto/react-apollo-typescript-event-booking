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

  const res = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    body: JSON.stringify(queryBody),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();

  return data;
};

export default bookingsQuery;

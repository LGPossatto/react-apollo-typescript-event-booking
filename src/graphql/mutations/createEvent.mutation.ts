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

    const res = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(mutationBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export default createEventMutation;

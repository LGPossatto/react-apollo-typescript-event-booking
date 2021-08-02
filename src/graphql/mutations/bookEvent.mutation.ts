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

export default bookEventMutation;

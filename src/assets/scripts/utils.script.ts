import { severURL } from "./config";

export const showError = (
  ref: React.RefObject<HTMLDivElement>,
  msg: string
) => {
  ref.current!.innerText = msg;
};

export const clearError = (ref: React.RefObject<HTMLDivElement>) => {
  ref.current!.innerText = "";
};

export const fetchData = async (
  body: { query: string },
  token: string | null = null
) => {
  const headers: { "Content-Type": string; Authorization?: string } = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = "Bearer " + token;
  }

  const res = await fetch(severURL, {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  });
  const data = await res.json();

  return data;
};

export const showError = (
  ref: React.RefObject<HTMLDivElement>,
  msg: string
) => {
  ref.current!.innerText = msg;
};

export const clearError = (ref: React.RefObject<HTMLDivElement>) => {
  ref.current!.innerText = "";
};

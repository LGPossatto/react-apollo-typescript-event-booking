export type TLoginInput = {
  email: string;
  password: string;
};

export type TUser = {
  userId: string;
  token: string;
  tokenExpiration: number;
};

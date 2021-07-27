export type TLoginInput = {
  email: string;
  password: string;
};

export type TUser = {
  userId: string;
  token: string;
  tokenExpiration: number;
};

export type TEvents = {
  _id: string;
  title: string;
  date: Date;
  description: string;
  price: number;
  creator: {
    _id: string;
    email: string;
  };
};

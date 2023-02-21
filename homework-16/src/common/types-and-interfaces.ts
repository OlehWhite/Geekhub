export type User = {
  id: number;
  login: string;
  password: string;
  isAdmin: boolean;
};

export type Todo = {
  id: number;
  userId?: any;
  topic: string;
  text: string;
};



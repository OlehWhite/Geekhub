export type MyTodo = {
  id: number;
  title: string;
  userId: number;
  completed: string;
};

export type MyTodos = {
  id: number;
  userId?: number;
  completed: number;
  title: string;
};

export type MyUseUrlState = {
  status: number;
};

export type MyUser = {
  name: string;
};

export type MyUsers = {
  id: number;
  name: string;
};

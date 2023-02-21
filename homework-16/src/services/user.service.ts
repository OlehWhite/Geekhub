import { Todo, User } from "../common";

export class UserService {
  db: User[] = [];
  isCounter: number = 1;
  td: Todo[] = [];
  isCounterTd: number = 1;

  async addUser(
    login: string,
    password: string,
    isAdmin: boolean = false
  ): Promise<User> {
    const user: User = {
      id: this.isCounter,
      login,
      password,
      isAdmin,
    };

    this.db.push(user);

    this.isCounter++;

    console.log(`Our database = ${JSON.stringify(this.db)}`);

    return user;
  }

  async addTodo(userId: number, topic: string, text: string): Promise<Todo> {
    const todo: Todo = {
      id: this.isCounterTd,
      userId,
      topic,
      text,
    };

    this.td.push(todo);

    this.isCounterTd++;

    console.log(`Our Post = ${JSON.stringify(this.td)}`);

    return todo;
  }

  async addPagination(skip: number, take: number) {
    const pagination = {
      skip,
      take,
    };

    return {
      skip: skip,
      take: take,
    };
  }

  async redact(id: number, topic: string, text: string) {
    const todo: Todo = {
      id,
      topic,
      text,
    };

    this.td.forEach((_todo) => {
      if (_todo.id === id) {
        _todo.topic = topic;
        _todo.text = text;
      }
    });

    return todo;
  }

  async delete(id: number) {
    for (let i = 0; i < this.td.length; i++) {
      if (this.td[i].id === id) {
        console.log(this.td[i].id, id);
        this.td.splice(i, 1);
      }
    }
  }
}

export const userService = new UserService();

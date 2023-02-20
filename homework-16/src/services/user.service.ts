import { User } from "../common";

export class UserService {
  db: User[] = [];
  isCounter: number = 1;

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
}

export const userService = new UserService();

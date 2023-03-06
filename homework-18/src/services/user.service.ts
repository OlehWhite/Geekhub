import { User, UserModel } from "../models";
import { HttpError } from "../common/errors";

export class UserService {
  async addUser(
    login: string,
    password: string,
    isAdmin: boolean = false
  ): Promise<User> {
    console.log(User)
    const oldUser: User[] = await UserModel.find({ login });

    oldUser.map((user) => {
      if (user.login === login) {
        throw new HttpError(409, "Conflict", "UserService");
      }
    });

    return UserModel.create({ login, password, isAdmin });
  }

  async login(
    login: string,
    password: string,
    isAdmin: boolean = false
  ): Promise<User[] | undefined> {
    const user: User[] = await UserModel.find({ login, password });

    if (user[0].login !== login || user[0].password !== password) {
      throw new HttpError(404, "Not Found", "UserService");
    }

    return user
  }
}

export const userService = new UserService();

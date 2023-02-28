import { User, UserModel } from "../models";

export class UserService {
  async addUser(
    login: string,
    password: string,
    isAdmin: boolean = false
  ): Promise<User> {
    return UserModel.create({ login, password, isAdmin });
  }

  async login(
    login: string,
    password: string,
    isAdmin: boolean = false
  ): Promise<User[] | null> {
    const user: User[] = await UserModel.find({ login, password });

    return user;
  }

}

export const userService = new UserService();

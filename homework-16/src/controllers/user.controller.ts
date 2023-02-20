import express, { Request, Response, NextFunction } from "express";
import { userService } from "../services";

export class UserController {
  router = express.Router();

  constructor() {
    this.router.post("/register", this.register);
    this.router.post("/login", this.login);
    // this.router.post("/password", this.password);
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    const { login, password } = req.body;

    const user = await userService.addUser(login, password);

    res.send(user);
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    const { login, password } = req.body;
    const users = userService.db;

    users.map((user) => {
      if (user.password === password && user.login === login) {
        res.send(user);
      }
    });
  };
}

export const userController = new UserController();

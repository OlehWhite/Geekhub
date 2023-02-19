import express, { Request, Response, NextFunction } from "express";

export class UserController {
  router = express.Router();

  constructor() {
    this.router.post("/register", this.register);
    this.router.post("/login", this.login);
    this.router.post("/password", this.password);
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello Oleh!");
  };

  login = async (req: Request, res: Response, next: NextFunction) => {};

  password = async (req: Request, res: Response, next: NextFunction) => {};
}

export const userController = new UserController();

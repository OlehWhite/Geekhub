import express, { Request, Response, NextFunction } from "express";
import { postService, userService } from "../services";

export class UserController {
  router = express.Router();

  constructor() {
    this.router.post("/register", this.register);
    this.router.post("/login", this.login);
    this.router.post("/:userId/post", this.post);
    // this.router.post("/posts", this.posts);
    // this.router.patch("/redact", this.redact);
    // this.router.delete("/delete", this.delete);
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    const { login, password } = req.body;

    const user = await userService.addUser(login, password);

    res.send(user);
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    const { login, password } = req.body;

    const user = await userService.login(login, password);

    res.send(user);
  };

  post = async (req: Request, res: Response, next: NextFunction) => {
    const { topic, text } = req.body;
    const { userId } = req.params;

    const user = await postService.addPost(topic, text, userId);

    res.send(user);
  };
}

export const userController = new UserController();

import express, { Request, Response, NextFunction } from "express";
import { userService } from "../services";

export class UserController {
  router = express.Router();

  constructor() {
    this.router.post("/register", this.register);
    this.router.post("/login", this.login);
    this.router.post("/:userId/post", this.post);
    this.router.post("/posts", this.posts);
    this.router.patch("/redact", this.redact);
    this.router.delete("/delete", this.delete);
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    const { login, password } = req.body;

    const user = await userService.addUser(login, password);

    res.send(user);
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    const { login, password } = req.body;

    const oldUser = await userService.checkLogin(login, password);

    res.send(oldUser);
  };

  post = async (req: Request, res: Response, next: NextFunction) => {
    const { topic, text } = req.body;

    const userId = +req.params.userId;

    const todo = await userService.addTodo(userId, topic, text);

    res.send(todo);
  };

  posts = async (req: Request, res: Response, next: NextFunction) => {
    const { skip, take, userId } = req.body;

    const paginationTodos = await userService.addPagination(skip, take, userId);

    res.send(paginationTodos);
  };

  redact = async (req: Request, res: Response, next: NextFunction) => {
    const { id, topic, text } = req.body;

    const todo = await userService.redact(+id, topic, text);

    res.send(todo);
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;

    const todo = await userService.delete(+id);

    res.send(todo);
  };
}

export const userController = new UserController();

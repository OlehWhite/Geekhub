import express, { Request, Response, NextFunction } from "express";
import { userService } from "../services";

export class UserController {
  router = express.Router();

  constructor() {
    this.router.post("/register", this.register);
    this.router.get("/login", this.login);
    this.router.post("/:userId/post", this.post);
    this.router.get("/posts", this.posts);
    this.router.put("/redact", this.redact);
    this.router.delete("/delete", this.delete);
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

  post = async (req: Request, res: Response, next: NextFunction) => {
    const { topic, text } = req.body;

    const userId = +req.params.userId;

    const todo = await userService.addTodo(userId, topic, text);

    res.send(todo);
  };

  posts = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;
    const { skip, take } = req.body;
    const todos = userService.td;
    const paginationTodos = await userService.addPagination(skip, take);
    let skipPosts = [];
    let takePosts = [];

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].userId === +userId) {
        if (todos[i].id >= paginationTodos.skip) {
          skipPosts.push(todos[i]);
        }
      }
    }

    for (let i = 0; i < skipPosts.length; i++) {
      if (skipPosts[i].userId === +userId) {
        if (skipPosts[i].id <= paginationTodos.take) {
          takePosts.push(skipPosts[i]);
        }
      }
    }

    res.send(takePosts);
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

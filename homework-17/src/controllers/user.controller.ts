import express, { Request, Response, NextFunction } from "express";
import { postService, userService } from "../services";
import { HttpError } from "../common/errors";

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
    try {
      const { login, password } = req.body;

      const user = await userService.addUser(login, password);

      res.send(user);
    } catch (e: any) {
      console.log("error throw", e.message);
      next(e);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { login, password } = req.body;

      const user = await userService.login(login, password);

      res.send(user);
    } catch (e: any) {
      console.log("error throw", e.message);
      next(e);
    }
  };

  post = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { topic, text } = req.body;
      const { userId } = req.params;

      const user = await postService.addPost(topic, text, userId);

      res.send(user);
    } catch (e: any) {
      console.log("error throw", e.message);
      next(e);
    }
  };

  posts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user, skip, take } = req.body;

      const posts = await postService.takePosts(user, skip, take);

      res.send(posts);
    } catch (e: any) {
      console.log("error throw", e.message);
      next(e);
    }
  };

  redact = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, topic, text } = req.body;

      const user = await postService.redactPost(id, topic, text);

      res.send(user);
    } catch (e: any) {
      console.log("error throw", e.message);
      next(e);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;

      const deletePost = await postService.deletePost(id);

      res.send(deletePost);
    } catch (e: any) {
      console.log("error throw", e.message);
      next(e);
    }
  };
}

export const userController = new UserController();

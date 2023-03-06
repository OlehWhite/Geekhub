import { Request, Response, NextFunction } from "express";
import { postService, userService } from "../services";
import { BaseController } from "../common/abstract/base.controller";
import Joi from "joi";

const registerBodySchema = Joi.object({
  login: Joi.string().min(3).max(255).required(),
  password: Joi.string()
    .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/)
    .required(),
});

export class UserController extends BaseController {
  constructor() {
    super();
    this.bindRoutes([
      {
        path: "/register",
        method: "post",
        handler: this.register,
        validators: {
          body: registerBodySchema,
        },
      },
      {
        path: "/login",
        method: "post",
        handler: this.login,
      },
      {
        path: "/:userId/post",
        method: "post",
        handler: this.post,
      },
      {
        path: "/posts",
        method: "post",
        handler: this.posts,
      },
      {
        path: "/redact",
        method: "patch",
        handler: this.redact,
      },
      {
        path: "/delete",
        method: "delete",
        handler: this.delete,
      },
    ]);
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    console.log(123123)
    // console.log(req.body.login, req.body.password)
    // res.send(req.body)
    const {login, password} = req.body
    res.send(await userService.addUser(login, password));
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    res.send(await userService.login(req.body.login, req.body.password));
  };

  post = async (req: Request, res: Response, next: NextFunction) => {
    res.send(
      await postService.addPost(
        req.body.topic,
        req.body.text,
        req.params.userId
      )
    );
  };

  posts = async (req: Request, res: Response, next: NextFunction) => {
    res.send(
      await postService.takePosts(req.body.user, req.body.skip, req.body.take)
    );
  };

  redact = async (req: Request, res: Response, next: NextFunction) => {
    res.send(
      await postService.redactPost(req.body.id, req.body.topic, req.body.text)
    );
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    res.send(await postService.deletePost(req.body.id));
  };
}

export const userController = new UserController();

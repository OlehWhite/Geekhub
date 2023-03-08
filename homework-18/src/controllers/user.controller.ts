import { Request, Response, NextFunction } from "express";
import { postService, userService } from "../services";
import { BaseController } from "../common/abstract/base.controller";
import { postBodySchema, registerBodySchema } from "../common/validations";

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
        validators: {
          body: postBodySchema,
        },
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
        validators: {
          body: postBodySchema
        }
      },
      {
        path: "/delete",
        method: "delete",
        handler: this.delete,
      },
    ]);
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    res.send(
      await userService.addUser(
        req.body.login,
        req.body.password,
        req.body.email,
        req.body.avatar,
        req.body.fistName,
        req.body.lastName,
        req.body.socials, // ist, face, twit
        req.body.age,
        req.body.interest,
        req.body.address1,
        req.body.address2,
        req.body.postIndex
      )
    );
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

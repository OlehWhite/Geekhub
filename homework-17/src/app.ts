import express, { NextFunction, Request, Response } from "express";
import { userController } from "./controllers";
import morgan from "morgan";
import bodyparser from "body-parser";
import helmet from "helmet";
import cors from "cors-ts";
import mongoose from "mongoose";
import { HttpError } from "./common/errors";
import { exceptionFilter } from "./common/errors/exception.filter";

export class App {
  app = express();
  port = 8000;

  useRoutes() {
    this.app.use("/users", userController.router);
  }

  useMiddlewares() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        try {
          throw new HttpError(500, "Oleh error");
        } catch (e: any) {
          console.log("error throw", e.message);
          next(e);
        }
      }
    );
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(
      morgan(':date[iso] ":method :url :status :res[content-length]')
    );
    this.app.use(bodyparser.urlencoded({ extended: true }));
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log("Error in middleware", err.message);
      }
    );
  }

  async initDb() {
    await mongoose.connect("mongodb://localhost:27017/lecture17");
    console.log("Database connection established successfully");
  }

  // throwError() {
  //   throw new HttpError(500, "Oleh error");
  // }

  async init() {
    this.useMiddlewares();
    this.useRoutes();
    await this.initDb();
    this.app.use(exceptionFilter.catch.bind(exceptionFilter));
    this.app.listen(this.port, () => {
      console.log(`Server is listening on http://localhost:${this.port}`);
    });

    process.on("uncaughtException", (err: Error) => {
      console.log("Uncaught error", err.message);
    });

    process.on("unhandledRejection", (err: Error) => {
      console.log("Uncaught ASYNC error", err.message);
    });
  }
}

(async () => {
  const app = new App();
  await app.init();
})();

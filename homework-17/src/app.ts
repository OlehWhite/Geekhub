import express from "express";
import { userController } from "./controllers";
import morgan from "morgan";
import bodyparser from "body-parser";
import helmet from "helmet";
import cors from "cors-ts";
import mongoose from "mongoose";

export class App {
  app = express();
  port = 8000;

  useRoutes() {
    this.app.use("/users", userController.router);
  }

  useMiddlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(
      morgan(':date[iso] ":method :url :status :res[content-length]')
    );
    this.app.use(bodyparser.urlencoded({ extended: true }));
  }

  async initDb() {
    await mongoose.connect("mongodb://localhost:27017/lecture17");
    mongoose.set("strictQuery", false);

    console.log("Good");
  }

  async init() {
    this.useMiddlewares();
    this.useRoutes();
    await this.initDb();
    this.app.listen(this.port, () => {
      console.log(`Server is listening on http://localhost:${this.port}`);
    });
  }
}

(async () => {
  const app = new App();
  await app.init();
})();

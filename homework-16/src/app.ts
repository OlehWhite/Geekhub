import express from "express";
import { userController } from "./controllers";
import morgan from "morgan";
import bodyparser from "body-parser";

export class App {
  app = express();
  port = 8000;

  useRoutes() {
    this.app.use("/users", userController.router);
  }

  useMiddlewares() {
    this.app.use(
      morgan(':date[iso] ":method :url :status :res[content-length]')
    );
    this.app.use(bodyparser.urlencoded({ extended: true }));
  }

  async init() {
    this.useMiddlewares();
    this.useRoutes();
    this.app.listen(this.port, () => {
      console.log(`Server is listening on http://localhost:${this.port}`);
    });
  }
}

(async () => {
  const app = new App();
  await app.init();
})();

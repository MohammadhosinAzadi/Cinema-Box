import express,{ Application } from "express";
import { Routers } from "./Routers/index"

export function createApp(): Application {
    const app: Application = express();

    for (const { path, router } of Routers) {
      app.use(path, router);
    }

    return app;
}
  
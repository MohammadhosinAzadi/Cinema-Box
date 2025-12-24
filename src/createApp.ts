import express,{ Application } from "express";
import { Routers } from "./Routers/index"
import { errorHandler } from "./Middleware/Errors/errorHandler";
import { notFoundHandler } from "./Middleware/Errors/notFoundHandler";

export function createApp(): Application {
  const app: Application = express();

  for (const { path, router } of Routers) {
    app.use(path, router);
  }

  app.use(notFoundHandler);

  app.use(errorHandler);

  return app;
}
  
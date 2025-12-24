import { createApp } from "./createApp";
import { setupDatabase } from "./Database/index";
import { Application } from "express";

function listen(app: Application, port = 3000) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} ----`);
  });
}

export async function startApp() {
  await setupDatabase();

  const app = await createApp();
  listen(app, Number(process.env.PORT));
}


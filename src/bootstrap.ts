import { createApp } from "./createApp";
import { dbPromise } from "./Database/index";

function listen(app: any) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} ----`);
  });
}

export async function startApp() {
  await dbPromise;
  const app = await createApp();
  listen(app)
}

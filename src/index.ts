import { startApp } from "./bootstrap";

startApp().catch((err) => {
  throw new Error(`App failed to start: ${err.message}`); 
});
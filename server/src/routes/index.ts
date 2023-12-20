import { Express } from "express";

export function initRoutes(app: Express) {
  app.get("/health", (_, res) => {
    res.json({ message: "ok" });
  });
  return app;
}

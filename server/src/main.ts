import { configDotenv } from "dotenv";
import express from "express";
import morgan from "morgan";
import logger from "./utils/logger";
import { initRoutes } from "./routes";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import { handleSocket } from "./utils/socket-io";

async function main() {
  configDotenv();

  let app = express();

  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      allowedHeaders: "*",
    }),
  );
  app.use(express.urlencoded({ extended: true }));
  app.use(
    morgan(
      ":remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms",
    ),
  );

  app = initRoutes(app);

  const PORT = process.env["PORT"] || 8080;

  const httpServer = createServer(app);
  let io = new Server(httpServer, {
    cors: {
      allowedHeaders: "*",
      origin: "*",
    },
  });
  handleSocket(io);
  httpServer.listen(PORT, () => {
    logger.info(`server running at port:${PORT}`);
  });
}

main();

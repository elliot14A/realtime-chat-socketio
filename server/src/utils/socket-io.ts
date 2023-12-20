import { Server } from "socket.io";
import logger from "./logger";
import { createuniqueName } from "./uniqueName";
import { list } from "../services/messages/list";
import { create } from "../services/messages/create";

export function handleSocket(io: Server) {
  io.on("connection", async (socket) => {
    let currentRoom = "General";
    const userName = createuniqueName();
    // create a new anonymous user with unique name
    socket.emit("userName", { userName });

    logger.info(`new user:${userName} with connection id:${socket.id}`);
    socket.on("disconnect", () => {
      logger.info(`user:${userName} disconnected`);
    });

    socket.on("join", async (data) => {
      currentRoom = data;
      socket.join(data);
      // leave from all rooms expect the current room
      socket.rooms.forEach((room) => {
        if (room !== data) {
          socket.leave(room);
        }
      });
      const messages = await list(currentRoom);
      socket.to(currentRoom).emit("messages", { messages });
    });

    socket.on("message", async (data) => {
      const message = await create(userName, data.text, currentRoom);
      socket.to(currentRoom).emit("message", message);
    });
  });
}

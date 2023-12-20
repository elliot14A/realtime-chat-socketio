import { Server } from "socket.io";
import logger from "./logger";
import { createuniqueName } from "./uniqueName";
import { list } from "../services/messages/list";
import { create } from "../services/messages/create";
import { Message } from "../services/messages";

export function handleSocket(io: Server) {
  io.on("connection", async (socket) => {
    let currentRoom = "General";
    const userName = createuniqueName();
    // create a new anonymous user with unique name
    socket.emit("userName", { userName });

    logger.info(`new user:${userName} with connection id:${socket.id}`);
    socket.on("disconnect", () => {
      logger.info(`socket disconnect user:${userName}}`);
    });

    socket.on("join", (data) => {
      currentRoom = data;
      socket.join(data);
      // leave from all rooms expect the current room
      socket.rooms.forEach((room) => {
        if (room !== data) {
          socket.leave(room);
        }
      });
      socket.to(currentRoom).emit("messages", { messages: list(currentRoom) });
    });

    socket.on("message", (data) => {
      const message: Message = {
        user: userName,
        text: data.text,
        date: new Date().toISOString(),
      };
      create(userName, data.text, currentRoom);
      socket.to(currentRoom).emit("message", message);
    });
  });
}

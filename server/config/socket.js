import { Server } from "socket.io";

let io;

const configureSocketIO = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
};

export { configureSocketIO, io };

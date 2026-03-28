import { createServer } from "http";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";

// config
const PORT = process.env.PORT || 3000;

// initialize socket.io
const server = createServer();
const io = new Server(server, {
  cors: {
    origin: [
      "https://admin.socket.io",
      "http://localhost:5173",
      "http://localhost:4173",
    ],
    credentials: true,
  },
});

// admin-ui instrumentation
if (process.env.NODE_ENV === "development") {
  instrument(io, { auth: false });
}

// socket.io event handlers
io.on("connection", (socket) => {
  console.log(`a user ${socket.id} connected`);

  socket.on("disconnect", () => {
    console.log(`user ${socket.id} disconnected`);
  });

  // receive notification from client
  socket.on("push:notification", (notification) => {});

  // sync notification from client
  socket.on("sync:notification", (notification) => {});

  // receive message from client
  socket.on("push:message", (message) => {});

  // sync message from client
  socket.on("sync:message", (message) => {});
});

// start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

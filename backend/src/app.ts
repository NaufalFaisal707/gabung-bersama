import { createServer } from "http";
import { Server } from "socket.io";

// config
const PORT = process.env.PORT || 3000;

// initialize socket.io
const server = createServer();
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// socket.io event handlers
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

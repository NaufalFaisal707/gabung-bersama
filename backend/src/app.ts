import { createServer } from "http";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";

// config
const PORT = process.env.PORT || 3000;

// initialize socket.io
const server = createServer();
const io = new Server(server, {
  cors: {
    origin: ["https://admin.socket.io", "http://localhost:5173"],
    credentials: true,
  },
});

// admin-ui instrumentation
instrument(io, { auth: false });

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

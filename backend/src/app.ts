import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";

// config
const PORT = process.env.PORT || 3000;

// initialize express app
const app = express();
const server = http.createServer(app);

// express middleware
app.use(cors());

// initialize socket.io
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

import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

declare module "socket.io" {
  interface Socket {
    username?: string;
  }
}

let onlineUsers =0;

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  onlineUsers++;

  console.log("User Connected", socket.id);

  socket.on("join", (username : string) => {
    socket.username = username;
    io.emit("user-joined", username);
  });

  io.emit("online-count", onlineUsers);

  socket.on("message", (data: string) => {
    io.emit("message", {
      username: socket.username,
      text: data,
      time: new Date().toLocaleTimeString()
    })
  })
  socket.on("disconnect", () => {
    onlineUsers--;
    io.emit("online-count", onlineUsers);
    console.log(`User disconnected. Online: ${onlineUsers}`);
  });
});

server.listen(3000, () => {
  console.log("connected to 3000")
})

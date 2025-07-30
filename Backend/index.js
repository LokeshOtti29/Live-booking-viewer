import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
  },
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
app.use(express.static(path.join(__dirname, "../Frontend")));
const bookings = [];
io.on("connection", (socket) => {
  console.log("client connected");

  bookings.forEach((booking) => {
    socket.emit("new-booking", booking);
  });
  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});
setInterval(() => {
  const newBooking = {
    venueName: `Venue-${Math.floor(Math.random() * 100)}`,
    partySize: Math.floor(Math.random() * 10) + 1,
    time: new Date().toLocaleTimeString(),
  };

  bookings.unshift(newBooking);
  io.emit("new-booking", newBooking);
}, 5000);
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

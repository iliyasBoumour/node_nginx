const io = require("./index");

const list = [{ task: "create a webite", time: Date.now() }];
const getList = () => list.reverse();

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.emit("tasks:get", getList());

  socket.on("tasks:post", (msg) => {
    list.push(msg);
    io.emit("tasks:get", getList());
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const form = document.getElementById("form");
const list = document.getElementById("list");
const text = document.getElementById("text");

let allTasks = [];

const socket = io("");
socket.on("tasks:get", (msg) => {
  allTasks = msg;
  render();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (text.value) {
    socket.emit("tasks:post", { task: text.value, time: Date.now() });
    text.value = "";
  }
});

function render() {
  const html = allTasks.map(({ task, time }) => template(task, time));
  list.innerHTML = html.join("\n");
}

const template = (task, time) =>
  `<li class="collection-item"><span class="badge">
  ${new Date(time).toDateString()}</span>${task}</li>`;

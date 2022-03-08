const root = document.getElementById("root");
const list = document.getElementById("list");

let allTasks = [{ task: "create a webite", time: Date.now() }];

function render() {
  const html = allTasks.map(({ task, time }) => template(task, time));
  list.innerHTML = html.join("\n");
}

const template = (task, time) =>
  `<li class="collection-item"><span class="badge">
  ${new Date(time).toDateString()}</span>${task}</li>`;
render();

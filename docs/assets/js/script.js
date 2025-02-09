const taskList = document.querySelector(".tasks");
const btn = document.querySelector("#btn");
const task = document.querySelector("#task");

btn.addEventListener("click", addTask);

function getTask() {
  return task.value;
}

function addTask() {
  const divWithComponents = addComponents();
  appendTask(divWithComponents);
}

function addComponents(div) {
  return `<div><p>${getTask()}</p> <button>${"Add"}</button> 
          <button>${"Delete"}</button></div>`;
}

function appendTask(currentTask) {
  console.log("Appended");

  taskList.innerHTML = currentTask;
}

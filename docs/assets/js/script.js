const taskList = document.querySelector(".tasks");
const btn = document.querySelector("#btn");
const task = document.querySelector("#task");
const char_count_status = document.querySelector("#characters");
const char_left_status = document.querySelector("#charLeft");
let progressCount = 0,
  totalDone = 0;

btn.addEventListener("click", addTask);
task.addEventListener("keydown", countCharacters);
task.addEventListener("keyup", countCharacters);

function getTask() {
  return task.value;
}
function checkTask() {
  return task.value === "" ? true : false;
}
function addTask() {
  if (!checkTask()) {
    const div = document.createElement("div");
    const task = addComponents(div);
    checkCharacters() ? appendTask(task) : "";
  } else {
    document.getElementById("error-message").innerHTML =
      "Input Cannot be Empty";
  }
}

function addComponents(div) {
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const p_element = document.createElement("p");
  const section = document.createElement("section");

  btn1.innerHTML = "DONE";
  btn2.innerHTML = "DELETE";
  p_element.innerHTML = task.value;

  section.append(btn1, btn2);
  addId(btn1, btn2);
  addComponentEvents(btn1, btn2);
  div.append(p_element, section);

  return div;
}

function appendTask(currentTask) {
  taskList.appendChild(currentTask);
  document.getElementById("error-message").innerHTML = "";
  task.value = "";

  progressCount++;
  countCharacters();
  updateInProgress(progressCount);
  task.focus();
}

function countCharacters() {
  const current_characters = task.value.replaceAll(" ", "").split("");
  char_count_status.innerHTML = current_characters.length;
  reduceCharacters(current_characters.length);
}

function checkCharacters() {
  const current_characters = task.value.replaceAll(" ", "").split("");
  if (current_characters.length > 50) {
    document.getElementById("error-message").innerHTML =
      "You exceed the limit of characters";

    return false;
  }

  return true;
}

function reduceCharacters(current_word_count) {
  char_left_status.innerHTML = `${50 - current_word_count}`;
}

function updateInProgress(progressCount) {
  document.getElementById(
    "on-progress"
  ).innerHTML = `ON PROGRESS : ${progressCount}`;
}

function addComponentEvents(btn1, btn2) {
  btn1.addEventListener("click", markTaskDone);
  btn2.addEventListener("click", deleteTask);
}

function deleteTask() {
  const parent = event.target.parentNode;
  const outerPrent = parent.parentNode;
  taskList.removeChild(outerPrent);
  progressCount > 0 ? progressCount-- : (progressCount = 0);
  updateInProgress(progressCount);
}

function markTaskDone() {
  const parent = event.target.parentNode;
  const outerParent = parent.parentNode;

  outerParent.childNodes[0].style.textDecoration = "line-through";
  progressCount > 0 ? progressCount-- : (progressCount = 0);
  totalDone++;

  updateInProgress(progressCount);
  updateTotalDone(totalDone);
}

function addId(btn1, btn2) {
  btn1.id = "doneBtn";
  btn2.id = "delBtn";
}

function updateTotalDone(total) {
  document.getElementById("totalDone").innerHTML = `Total Done: ${total}`;
}

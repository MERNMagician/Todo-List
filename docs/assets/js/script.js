const taskList = document.querySelector(".tasks");
const btn = document.querySelector("#btn");
const task = document.querySelector("#task");
const char_count_status = document.querySelector("#characters");
const char_left_status = document.querySelector("#charLeft");

btn.addEventListener("click", addTask);
task.addEventListener("keydown", countCharacters);

function getTask() {
  return task.value;
}

function addTask() {
  const div = document.createElement("div");
  div.innerHTML = addComponents();
  appendTask(div);
}

function addComponents(div) {
  return `<p>${getTask()}</p> <section><button>${"Add"}</button> 
          <button>${"Delete"}</button></section>`;
}

function appendTask(currentTask) {
  taskList.appendChild(currentTask);
  task.value = "";
  task.focus();
}

function countCharacters() {
  const word = task.value.split("");
  console.log(word);
  char_count_status.innerHTML = `TOTAL CHARACTERS : ${word.length}`;
  reduceCharacters(word.length);
}

function reduceCharacters(current_word_count) {
  char_left_status.innerHTML = `CHARACTERS LEFT : ${50 - current_word_count}`;
}

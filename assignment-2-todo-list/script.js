const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMsg = document.getElementById("emptyMsg");

// Show or hide the "no tasks" message
function updateEmptyMessage() {
  emptyMsg.style.display = taskList.children.length === 0 ? "block" : "none";
}

// 1. ADD a task
function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    taskInput.focus();
    return;
  }

  // create the elements with DOM methods
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";

  // 2. MARK as completed (click on the text)
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // 3. DELETE the task
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateEmptyMessage();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
  updateEmptyMessage();
}

addBtn.addEventListener("click", addTask);

// Press Enter to add
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

updateEmptyMessage();

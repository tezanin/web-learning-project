const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function getTaskText() {
    return taskInput.value.trim();
}

function clearTaskInput() {
    taskInput.value = "";
    taskInput.focus();
}

function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    return li;
}

function addTask() {
    const taskText = getTaskText();

    if (taskText === "") {
        taskInput.focus();
        return;
    }

    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);

    clearTaskInput();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

taskInput.focus();
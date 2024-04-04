function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var pendingTasksList = document.getElementById("pendingTasks");
        var newTask = document.createElement("li");
        newTask.textContent = taskText;
        var completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            completeTask(newTask);
        };
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function() {
            deleteTask(newTask);
        };
        newTask.appendChild(completeButton);
        newTask.appendChild(deleteButton);
        pendingTasksList.appendChild(newTask);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function completeTask(task) {
    var completedTasksList = document.getElementById("completedTasks");
    var pendingTasksList = document.getElementById("pendingTasks");
    task.classList.toggle("completed");
    var completeButton = task.querySelector("button");
    completeButton.textContent = "Pending";
    completeButton.onclick = function() {
        pendingTasksList.appendChild(task);
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            completeTask(task);
        };
    };
    completedTasksList.appendChild(task);
    var timestamp = new Date().toLocaleString();
    var timeSpan = document.createElement("span");
    timeSpan.textContent = "Completed: " + timestamp;
    task.appendChild(timeSpan);
}

function deleteTask(task) {
    task.parentNode.removeChild(task);
}
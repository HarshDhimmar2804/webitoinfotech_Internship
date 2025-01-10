document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTask = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  // Add Task
  addTask.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
      addTaskToList(task);
      taskInput.value = "";
    } else {
      alert("Please enter a task.");
    }
  });

  // Add task to the list
  const addTaskToList = (task) => {
    const li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-button">Delete</button>
    `;

    // Delete Task
    const deleteButton = li.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    taskList.appendChild(li);
  };
});

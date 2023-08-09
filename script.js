document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    addTaskButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "bg-white p-2 rounded-md mb-2 flex justify-between items-center";
        taskItem.innerHTML = `
          <span>${taskText}</span>
          <button class="text-red-500">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.tagName === "BUTTON") {
        event.target.parentNode.remove();
      }
    });
  });
  
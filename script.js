document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    addTaskButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "bg-white p-2 md:p-10 rounded-md mb-2 flex justify-between items-center";
        taskItem.innerHTML = `
          <span class="md:text-4xl font-mono font-semibold pr-2 md:pr-10">${taskText}</span>
          <button class="text-red-500 md:text-5xl font-mono font-semibold">Delete</button>
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
  
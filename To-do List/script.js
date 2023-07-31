// Get references to the input, button, and task list
const taskInput = document.getElementById('taskInput');
const addButton = document.querySelector('button');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <input type="checkbox" class="checkbox" onchange="toggleComplete(this)">
      <span class="task-text">${taskText}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

// Function to delete a task
function deleteTask(deleteButton) {
  const taskItem = deleteButton.parentElement;
  taskList.removeChild(taskItem);
}

// Function to mark a task as completed
function toggleComplete(checkbox) {
  const taskText = checkbox.nextElementSibling;
  taskText.classList.toggle('completed', checkbox.checked);
}

// Listen for the "Enter" key press in the input field
taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Listen for the "Add Task" button click
addButton.addEventListener('click', addTask);

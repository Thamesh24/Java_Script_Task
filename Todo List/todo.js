// Selecting elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskItem(taskText) {
    // Create elements
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const removeButton = document.createElement('button');

    // Set attributes and text content
    checkbox.type = 'checkbox';
    span.textContent = taskText;
    removeButton.textContent = 'Remove';

    // Append elements to the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeButton);

    // Add event listener to the checkbox to mark task as completed
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    // Add event listener to the remove button to remove the task
    removeButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    return li;
}

// Event listener for adding a new task
addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTaskItem = createTaskItem(taskText);
        taskList.appendChild(newTaskItem);
        taskInput.value = '';
    }
});


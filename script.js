document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
        } else {
            // Create a new li element
            const li = document.createElement('li');
            
            // Set its textContent to taskText
            li.textContent = taskText;

            // Create a new button element
            const removeBtn = document.createElement('button');
            
            // Set its textContent to “Remove”
            removeBtn.textContent = "Remove";
            
            // Give it a class name of ‘remove-btn’
            removeBtn.className = "remove-btn";
            
            // Assign an onclick event to remove the li element
            removeBtn.onclick = function() {
                taskList.removeChild(li);
            };

            // Append the remove button to the li element
            li.appendChild(removeBtn);
            
            // Append the li to the task list
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = "";
        }
    }

    // Add event listener to Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

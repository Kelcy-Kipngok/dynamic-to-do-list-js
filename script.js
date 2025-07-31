document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define a function named addTask
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
        } else {
            // Create a new li element
            const li = document.createElement('li');

            // Set its textContent to taskText
            li.textContent = taskText;

            // Create a new button element
            const removeButton = document.createElement('button');

            // Set its textContent to “Remove”
            removeButton.textContent = "Remove";

            // Give it a class name of ‘remove-btn’
            removeButton.className = "remove-btn";

            // Assign an onclick event to the remove button
            removeButton.onclick = function() {
                taskList.removeChild(li);
            };

            // Append the remove button to the li element
            li.appendChild(removeButton);

            // Append the li to the task list
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = "";
        }
    }

    // Add an event listener to addButton
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

function display() {
    // Get the form and task list elements
    var form = document.getElementById("todoForm");
    var taskList = document.getElementById("taskList");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the task input value
        var taskInput = document.getElementById("taskInput");
        var task = taskInput.value;

        if (task.trim() !== "") {
            // Create a new task item
            var taskItem = document.createElement("li");
            taskItem.textContent = task;

            // Create a delete button for the task item
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function() {
                taskItem.remove(); // Remove the task item
            });

            // Append the delete button to the task item
            taskItem.appendChild(deleteButton);

            // Append the task item to the task list
            taskList.appendChild(taskItem);

            // Clear the task input field
            taskInput.value = "";
        }
    });
}


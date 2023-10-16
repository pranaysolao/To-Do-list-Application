document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText == "") {
            alert("you must add something");
        } else {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                
                <input type="checkbox" class="complete-task">Complete
                <button class="edit-task">Edit</button>
                <button class="delete-task">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
            saveData()
        }

    });

    taskList.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete-task")) {
            var doc;
            var result = confirm('Do you want to delete this record?');
            if (result == true) {
                e.target.parentElement.remove();
            } {
                doc = "";
            }
            saveData();
        } else if (e.target.classList.contains("complete-task")) {
            const span = e.target.parentElement.querySelector("span");
            span.classList.toggle("completed");
            saveData();
        } else if (e.target.classList.contains("edit-task")) {
            const span = e.target.parentElement.querySelector("span");
            const newText = prompt("Edit task:", span.textContent);
            if (newText !== null) {
                span.textContent = newText;
            }   
            saveData();
        }    
    });

    function saveData() {
        localStorage.setItem("data", taskList.innerHTML);
    }

    function showTask() {
        taskList.innerHTML = localStorage.getItem("data")
    }
    showTask();
});
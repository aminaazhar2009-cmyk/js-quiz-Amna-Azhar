let tasks = []; // array to store all tasks
let nextId = 1; // to generate unique ID

// 1. Add new task
function addTask(title) {
    let newTask = {
        id: nextId,
        title: title,
        completed: false
    };
    tasks.push(newTask);
    nextId++;
    console.log("Task added:", newTask);
}

// 2. Delete task by ID
function deleteTask(id) {
    let index = -1;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            index = i;
            break;
        }
    }
    
    if (index!== -1) {
        tasks.splice(index, 1);
        console.log("Task deleted with ID:", id);
    } else {
        console.log("Error: Task with ID", id, "not found");
    }
}

// 3. Mark
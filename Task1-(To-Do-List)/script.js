let taskList = document.getElementById("taskList");

function addTask() {
	let taskInput = document.getElementById("taskInput");
	let taskText = taskInput.value.trim();
	if (taskText === "") 
	{
		alert("Please enter a task.");
		return;
	}
	
	let newTask = document.createElement("li");
	let taskSpan = document.createElement("span");
	
	taskSpan.innerText = taskText;
	newTask.appendChild(taskSpan);
	
	let deleteButton = document.createElement("button");
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";
	deleteButton.onclick = deleteTask;
	newTask.appendChild(deleteButton);
	
	let completeButton = document.createElement("button");
	completeButton.innerText = "Complete";
	completeButton.onclick = completeTask;
	
	newTask.appendChild(completeButton);
	taskList.appendChild(newTask);
	taskInput.value = "";
}


function deleteTask() {
	let task = this.parentNode;
	taskList.removeChild(task);

}

function completeTask() {
	let task = this.parentNode;
	task.classList.toggle("completed");
}

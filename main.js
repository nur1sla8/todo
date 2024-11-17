let task = [];

let taskInput = document.getElementById('taskInput');
let addTaskbutton = document.getElementById('addTask');
let taskList = document.getElementById('taskList');

function addTask (){
    let taskText = taskInput.value.trim();
    if (taskText !== ""){
        task.push(taskText);
        taskInput.value = "";
        renderTasks();
    }else{
        alert("Введите задачу");
    }
}

addTaskbutton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        addTask();
    }
})

function renderTasks(){
    taskList.innerHTML = "";
    for(let i = 0; i < task.length; i++){
        let taskItem = document.createElement('li');
        taskItem.classList.add('tasks')
        taskItem.innerHTML = `<span>${task[i]}</span>
        <button class = "btn" onclick = "deleteTask(${i})">Удалить</button>
        `;
        taskList.appendChild(taskItem);
    }
}
function deleteTask(index){
    task.splice(index, 1);
    renderTasks();
}
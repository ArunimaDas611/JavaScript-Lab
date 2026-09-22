const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function () {
    let task = taskInput.value.trim();
    if(task === "") {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement('span');
    span.textContent = task;

    const buttons = document.createElement('div');
    buttons.className = 'buttons';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit';

    editBtn.addEventListener('click', function () {
        let newTask = prompt('Edit Task', span.textContent);

        if(newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask;
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';

    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttons);

    taskList.appendChild(li);

    taskInput.value = '';
});
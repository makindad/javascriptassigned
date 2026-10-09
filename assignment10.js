
let taskInput = document.querySelector('#taskInput')

let taskList = document.querySelector('#taskList')

function addTask(){

    let task = taskInput.value

    if(task.trim() !== ''){

        let newTask = document.createElement('li')

        newTask.innerText = task

        taskList.appendChild(newTask)

        taskInput.value = ''

    }

    else{

        alert('Please enter a task')

    }

}
const taskForm = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearButton = document.querySelector('.clear-tasks');
const taskFilter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
  // Event Listeners
  // Adding Tasks
  taskForm.addEventListener('submit', addTask);
  // Remove task
  taskList.addEventListener('click', removeTask);
  // Clear All Task
  clearButton.addEventListener('click', clearTask);
}

function addTask(e){
  if(taskInput.value === ''){
    alert('Please Add a Task')
  }else{
    const li = document.createElement('li');
    const link = document.createElement('a');
    const appendText = document.createTextNode(taskInput.value);
    li.className = 'collection-item';
    li.appendChild(appendText)
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link);
    // Append li task to ul
    taskList.appendChild(li)
  }

  e.preventDefault()
}

// Delete a Task Function
function removeTask(e){
  const link = document.querySelector('.fa');
  if(confirm('Are you sure, You want to delete?')){
  link.parentElement.parentElement.remove(); 
  }
  e.preventDefault();
}

// Clear all tasks function

function clearTask(e){
  
    console.log(taskList)

  if(taskList==undefined){
    console.log(taskList.nodeType)
    alert("your tas list is,Empty Please add some Tasks")
  }else{
    if(confirm("Are you sure you want to clear your task list")){
    console.log(taskList)

      taskList.remove()
    }
  }
  e.preventDefault();
}
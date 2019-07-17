
let addButton = document.getElementById("addBtn")
let enteredTask = document.getElementById("task")
let newTasksDiv = document.getElementById("pendingTasks")
let completedTasksDiv = document.getElementById("completedTasks")

addButton.addEventListener('click', function() {

let task = enteredTask.value 

//create div to hold each entry
let taskDiv = document.createElement("div")

//creates span to hold tasks
let taskSpan = document.createElement("span")
taskSpan.innerHTML = task

//create space to hold checkbox
let chk = document.createElement("input")
chk.setAttribute('type', 'checkbox')

//create span to hold "Remove"
let rmBtn = document.createElement("span")
rmBtn.innerHTML = `<button onclick="removeTask(this)">Remove</button>`

//adds elements of task together
taskDiv.appendChild(chk)
taskDiv.appendChild(taskSpan)
taskDiv.appendChild(rmBtn)

//adds each tash to pending tasks div
newTasksDiv.appendChild(taskDiv)

//initialize listener for checkbox
chk.addEventListener('click', function () {
    if (this.checked == true)
        completedTasksDiv.appendChild(taskDiv)

    else if (this.checked == false)
        newTasksDiv.appendChild(taskDiv)        
})


})

// removes tasks if remove button is pressed
function removeTask(e) {
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode)
}




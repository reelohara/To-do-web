// how to display the todos list on page load
// how to add todo on button click
const todoArr = ["Wash the dishes", "Take out the trash", "Walk the dog"]
const todoList= document.querySelector("#todos")
const formEL = document.querySelector("#todoForm")

formEL.addEventListener("submit", newTodo)
function display() {
  for (let i = 0; i < todoArr.length; i++) {
    const todoItem = document.createElement("li") 
    todoItem.innerText += todoArr[i] 
    todoList.appendChild(todoItem)
  }
}

function newTodo() {
  
}

display()
// how to display the todos list on page load
// how to add todo on button click
let todoArr = ["Wash the dishes", "Take out the trash", "Walk the dog"]
const todoList= document.querySelector("#todos")
const formEl = document.querySelector("#todoForm")
const buttonEl = document.querySelector("button[value = addTodo]")
const inputEl = document.querySelector("input[name = newTodo]")

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl) 
  for (data of formData){
    todoArr = [ ]
    todoArr.push(data[1])
    inputEl.value = ""
  }
  display()
})
function display() {

  for (let i = 0; i < todoArr.length; i++) {
    const todoItem = document.createElement("li") 
    todoItem.innerText += todoArr[i] 
    todoList.appendChild(todoItem)
  }
}


function newTodo() {
  
}

// how to display the todos list on page load
// how to add todo on button click
let todoArr = retrieveData()
const todoList= document.querySelector("#todos")
const formEl = document.querySelector("#todoForm")
const buttonEl = document.querySelector("button[value = addTodo]")
const inputEl = document.querySelector("input[name = newTodo]")
if (todoArr === null) {
  todoArr = []
}
else {
  retrieveData()
  display()
}
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl)
  const name = formData.get('newTodo')
  
  if (name.length === 0) {
    alert("Please don't leave the input empty")
  } 
  else {
    todoArr.push(name)
    inputEl.value = ""
    saveData()
    display()
  }
})
console.log(todoArr)
function display() {
  todoList.innerHTML = ""
  for (let i = 0; i < todoArr.length; i++) {
    const todoItem = document.createElement("li") 
    todoItem.innerText += todoArr[i] 
    todoList.appendChild(todoItem)
  }
}

function saveData() {
  localStorage.setItem("data", JSON.stringify(todoArr))
}

function retrieveData() {
  const values = JSON.parse(localStorage.getItem("data"))
  return values;
}

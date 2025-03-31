// how to display the todos list on page load
// how to add todo on button click

const todoArr = retrieveData()
const todoList= document.querySelector("#todos")
const formEl = document.querySelector("#todoForm")
const buttonEl = document.querySelector("button[value = addTodo]")
const inputEl = document.querySelector("input[name = newTodo]")

display()

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl)
  const name = formData.get('newTodo')

  todoArr.push(name)
  inputEl.value = ""
  saveData()
  display()
})

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

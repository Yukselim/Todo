const toggleButton = document.getElementById('themeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

document.addEventListener("DOMContentLoaded", loadTodoListUI);
document.addEventListener("click", deleteTodo)
const divText = document.querySelector(".todo-input-group");
const inputText = document.querySelector("#todo-input");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector("#todo-list");
divText.addEventListener("submit", function(e) {
 const newTodo = inputText.value.trim();
 if(newTodo === "")
    showAlert("danger","Geben Sie eine Todo, bitte!");
else
    {
        showAlert("success", "Todo wurde erfolgreich erstellt");
        addNewTodoUI(newTodo);
        addTodoLocalStorage(newTodo);
        inputText.value = "";
    }
 e.preventDefault();
 
});

function addNewTodoUI(newTodo)
{
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
  
    const todoText = document.createTextNode(newTodo); // nur der Text!
  
    const linkItem = document.createElement("a");
    linkItem.href = "#";
    linkItem.className = "delete-item";
    linkItem.innerHTML = "<i class='fa fa-remove'></i>"; // nur das Icon!
  
    listItem.appendChild(todoText);   // Zuerst den Text ins <li>
    listItem.appendChild(linkItem);   // Dann das Löschen-Icon ins <li>
    
    todoList.appendChild(listItem);   // Dann das <li> in die Liste
};

function showAlert(type, message)
{
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    //console.log(alert);
    todoContainer.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 1000);
}
 
function addTodoLocalStorage(newTodo)
{
    let todos = getStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
};
function loadTodoListUI() {
    let todos = getStorage();
    todos.forEach(function(todo)
    {
            addNewTodoUI(todo);
    });
}
function getStorage()
 {
    let todos;
    if(localStorage.getItem("todos") === null)
        todos = [];
    else
        todos = JSON.parse(localStorage.getItem("todos"));

    return todos;
 };
function deleteTodo(e)
{
    if(e.target.classList.contains("fa-remove"))
    {
        e.target.closest("li").remove();
        deleteTodoFromStorage( e.target.closest("li").textContent);
    }
}

function deleteTodoFromStorage(deleteTodo){
    const todos = getStorage();
    todos.forEach(function(todo,index){
        if(todo === deleteTodo)
            todos.splice(index,1);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}
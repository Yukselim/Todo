const toggleButton = document.getElementById('themeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const divText = document.querySelector(".todo-input-group");
const inputText = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
divText.addEventListener("submit", function(e) {
 const newTodo = inputText.value.trim();
 addNewTodo(newTodo);
 e.preventDefault();
 //console.log(newTodo);
});

function addNewTodo(newTodo)
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
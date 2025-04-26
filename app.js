const toggleButton = document.getElementById('themeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

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
        addNewTodo(newTodo);
    }
 e.preventDefault();
 
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


let allTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
console.log(allTodos);
function addToDo() {
    const toDoInput = document.querySelector(".input-toDoList");
    const newToDo = document.createElement("li");
    const remove = document.createElement("i");
    remove.classList.add("fa-solid", "fa-trash");
    if (toDoInput.value != "") {
        remove.setAttribute("onclick", `removeToDo('${toDoInput.value}')`);
        const toDoUl = document.querySelector(".ul-container");
        newToDo.innerText = toDoInput.value;
        toDoUl.appendChild(newToDo);
        newToDo.appendChild(remove);
        allTodos.push(toDoInput.value);
        localStorage.setItem("todos",JSON.stringify(allTodos));
        toDoInput.value = "";
    
    } else {
        alert("you must wright something");
    }

}

function renderToDos(){
    const toDoUl = document.querySelector(".ul-container");
    toDoUl.innerHTML="";
    allTodos.map((element)=>{
        const newToDo = document.createElement("li");
        newToDo.innerText = element;
        const remove = document.createElement("i");
        remove.classList.add("fa-solid", "fa-trash");
        newToDo.appendChild(remove);
        remove.setAttribute("onclick", `removeToDo('${element}')`);
        toDoUl.appendChild(newToDo);
    })
}
renderToDos();
function removeToDo(element) {
//     const toDoItem = event.target.parentElement;
//     toDoItem.remove();
//
const index = allTodos.indexOf(element);

console.log(index);
allTodos.splice(index,1);
console.log(allTodos, "this all to dos");
localStorage.setItem("todos",JSON.stringify(allTodos));
renderToDos();



}

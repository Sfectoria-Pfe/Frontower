export class ToDoList {

    constructor(parent) {
        this.parent = parent;
        this.value = "";
        this.tasks = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

    }
    deleteToDo(task) {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index,1);
        localStorage.setItem("todos",JSON.stringify(this.tasks));
        this.render();
        
    }
    addToDo() {
        const toDoInput = document.querySelector(".input-toDoList");
        // console.log(value,"value");
        const newToDo = document.createElement("li");
        const remove = document.createElement("i");
        newToDo.innerText = toDoInput.value
        if (toDoInput.value === "") {
            alert("you must wright something")
        } else {
            remove.classList.add("fa-solid", "fa-trash")
            remove.onclick=()=>this.deleteToDo(toDoInput.value);
            const toDoUl = document.querySelector(".ul-container");
            newToDo.innerText = toDoInput.value;
            toDoUl.appendChild(newToDo);
            newToDo.appendChild(remove)
            this.tasks = [...this.tasks, toDoInput.value]
            localStorage.setItem("todos", JSON.stringify(this.tasks));
            toDoInput.value = ""
        }
    }

    renderTodo(list) {
        // const toDoUl = document.querySelector(".ul-container");
      console.log(list,"list");
      
        list.innerHTML= "" ;
        this.tasks.forEach(task => {
            const newTodo = document.createElement("li");
            newTodo.innerText = task;
            const remove = document.createElement("i");
            remove.classList.add("fa-solid", "fa-trash");
            newTodo.appendChild(remove);
            remove.onclick=()=> this.deleteToDo(task);
            list.appendChild(newTodo);
        });
    }





    render() {
        const title = document.createElement('h1');
        title.innerText = "Test class JS"
        title.className = "text-center pt-5"

        const containerDiv = document.createElement("div")
        containerDiv.className = "blur col-6 d-flex pt-5 flex-column align-items-center justify-content-center"

        const inputButtonDiv = document.createElement('div')
        inputButtonDiv.className = "d-flex justify-content-center"
        inputButtonDiv.style = "width:100%"

        const input = document.createElement("input")
        input.setAttribute("type", "text");
        input.className = "input-toDoList w-100"

        const button = document.createElement("button")
        button.innerText = "add"
        // button.setAttribute("onclick",`addToDo(${input.value})`)
        button.onclick = () => this.addToDo()

        inputButtonDiv.appendChild(input);
        inputButtonDiv.appendChild(button);
        containerDiv.appendChild(inputButtonDiv)

        const list = document.createElement("ul");
        list.className = "ul-container col-8 pt-5";
        this.renderTodo(list);
        containerDiv.appendChild(list);
        this.parent.appendChild(title);
        this.parent.appendChild(containerDiv);

    }
}
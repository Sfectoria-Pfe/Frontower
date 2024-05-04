export class ToDoList{
    constructor(parent){
        this.parent=parent
        this.value=""
        this.tasks=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]
    }
    addToDo(){
        const toDoInput=document.querySelector(".toDoInput")
        const tododiv=document.querySelector(".containerUl")
        const newToDo=document.createElement("li")
        const deletIcon=document.createElement("i")
        newToDo.innerText=toDoInput.value
        if(toDoInput.value!=""){
        deletIcon.classList.add("fa-solid", "fa-trash")
        deletIcon.onclick=()=>this.removeTodo(toDoInput.value)

        deletIcon.setAttribute("onclick",`removeTodo('${toDoInput.value}')`)
        newToDo.innerText=toDoInput.value
        newToDo.appendChild(deletIcon)
        tododiv.appendChild(newToDo)
        this.tasks=[...this.tasks,toDoInput.value]
      
        localStorage.setItem("todos",JSON.stringify(this.tasks))
        toDoInput.value=""

        }
else{
    alert("error")
}

    }
    renderTodo(list){
        const tododiv=document.querySelector(".containerUl") 
        list.innerHTML=""
        this.tasks.forEach(task=>{
            const newTodo=document.createElement("li")
            newTodo.innerText=task
            const deletIcon=document.createElement("i")
            deletIcon.classList.add("fa-solid", "fa-trash")
            newTodo.appendChild(deletIcon)
            deletIcon.onclick=()=>this.removeTodo(task)
            list.appendChild(newTodo)
           list.appendChild(newTodo)
        })
    }
    removeTodo(task){
        const index=this.tasks.indexOf(task);
        this.tasks.splice(index,1)
        localStorage.setItem("todos",JSON.stringify(this.tasks));
        this.render()
    }
    render(){
        const titel =document.createElement('h1');
        titel.innerText="Test Class JS"
        titel.className="text-center pt-5"
        const containerDiv=document.createElement("div")
        containerDiv.className="blur col-md-6 d-flex  pt-5 flex-column"
        const inputButtonDiv=document.createElement('div')
        inputButtonDiv.className="d-flex"
        inputButtonDiv.style="width:100%"
        const input=document.createElement("input")
        input.setAttribute("type","text")
        input.className="toDoInput w-100"
        const button=document.createElement("button")
        button.innerText="Add"
        button.setAttribute("onclick",()=>this.addToDo(input.value))
        button.onclick=()=>this.addToDo()
        inputButtonDiv.appendChild(input)
        inputButtonDiv.appendChild(button)
        containerDiv.appendChild(inputButtonDiv)
        const list =document.createElement("ul")
        list.className="pt-5 containerUl"
        this.renderTodo(list)
        containerDiv.appendChild(list)
        this.parent.appendChild(titel)
        this.parent.appendChild(containerDiv)
    }
}

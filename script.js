var titel = document.getElementById("titel").innerText="test"
// const toDoInpu=document.getElementsByClassName("toDoInput")
// console.log("input",toDoInpu)

const alltodos=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]

function addToDo(){
const toDoInput=document.querySelector(".toDoInput")
const tododiv=document.querySelector(".containerUl")
const newToDo=document.createElement("li")
const deletIcon=document.createElement("i")
if(toDoInput.value!=""){
deletIcon.classList.add("fa-solid", "fa-trash")

deletIcon.setAttribute("onclick",`removeToDo('${toDoInput.value}')`)
newToDo.innerText=toDoInput.value
newToDo.appendChild(deletIcon)
tododiv.appendChild(newToDo)
alltodos.push(toDoInput.value);
localStorage.setItem("todos",JSON.stringify(alltodos))
toDoInput.value=""

}
else{
    alert("error")
}

}
function renderTodos(){
    const tododiv=document.querySelector(".containerUl") 
    tododiv.innerHTML=""
    alltodos.map((element)=>{
        const newToDo=document.createElement("li")
        newToDo.innerText=element
        const deletIcon=document.createElement("i")
        deletIcon.classList.add("fa-solid", "fa-trash")
        newToDo.appendChild(deletIcon)
        deletIcon.setAttribute("onclick",`removeToDo('${element}')`)
        tododiv.appendChild(newToDo)
      
    })

}
renderTodos()
function removeToDo(element){
    // const todoItem=event.target.parentElement
    // todoItem.remove()
    location.reload();
    const index=alltodos.indexOf(element)
    console.log("index-1",index)
    if (index!==-1){
        console.log("index",index)
        alltodos.splice(index,1)
        localStorage.setItem("todos",JSON.stringify(alltodos))
        renderTodos()   
      
    }

  

}
// function renderTodos(){
//     const tododiv=document.querySelector(".containerUl") 
//     tododiv.innerHTML=""
//     alltodos.forEach((element, index) => { // Using forEach to get both element and index
//         const newToDo=document.createElement("li")
//         newToDo.innerText=element
//         const deletIcon=document.createElement("i")
//         deletIcon.classList.add("fa-solid", "fa-trash")
//         newToDo.appendChild(deletIcon)
//         deletIcon.setAttribute("onclick", `removeToDo(${index})`) // Pass index directly
//         tododiv.appendChild(newToDo)
//     })
// }

// function removeToDo(index){
//     alltodos.splice(index,1) // Remove directly using the index
//     localStorage.setItem("todos",JSON.stringify(alltodos))
//     renderTodos()
// }

console.log(titel)
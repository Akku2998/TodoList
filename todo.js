// element extraction
const textInput = document.getElementById("inputText");
const addBtn = document.getElementById("addButton");


const list = document.querySelector("#parentList");

const todoList = [];

// event creation
addBtn.addEventListener("click", function(event){
    if(textInput.value === ""){
        return alert("you must write something");
    }
    addTodo(textInput.value);
    listTodo()
    //alert(todoList);
    textInput.value="";
});


// method creation
function addTodo(value) {
    todoList.push(value);
}

function removeTodo(index) {
    //const index = todoList.indexOf(value);
    todoList.splice(index, 1);
}

function updateTodo(value, newValue) {
    const index = todoList.indexOf(value);
    todoList.splice(index, 1, newValue);
}

function addMultipleTodo(valueArray) {
    valueArray.forEach((mValue) => {
        todoList.push(mValue);
    })

}

function manageRemove(event){
    const index=event.target.id;
    removeTodo(index);
    listTodo();
    //console.log(event.target.id);
}

function listTodo() {
    list.innerHTML=""; //reset toDo list elements
    todoList.forEach((value, index) => {
        const div = document.createElement("div");
        const span = document.createElement("span");
        const icon = document.createElement("i");
        span.textContent = value;
        icon.className = "fa fa-close close";
        icon.id=index;
        icon.addEventListener("click",manageRemove);
        //console.log(index, value);
        div.appendChild(span).appendChild(icon);
        div.className = "listItem";
        list.appendChild(div);
    })
}

// method execution
/*addTodo("aaaaa");
addTodo("mkkkk");
removeTodo("xyz");
removeTodo("aaaaa")
updateTodo("abc", "rahul");
addMultipleTodo(["aa", "bb", "cc", "dd"]);
listTodo();*/

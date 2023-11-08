let todo = document.querySelector("#txt");
let ul = document.querySelector("#list");

let arr = [];
function rendorTodo(){

    for (let i = 0; i < arr.length; i++){
        ul.innerHTML += ` <li>    ${arr[i]}   <button id="edit" onclick="editTodo(${i})">Edit</button>  <button id="delet" onclick="deleteTodo(${i})">Delete</button></li>`
    }

}
function add() {
    if(todo.value === ""){
        alert("Please enter text");
        return;
    }
    ul.innerHTML = "";
    arr.push(todo.value);
    console.log(todo.value);
    rendorTodo();
    todo.value = "";
}
function editTodo(i) {
    console.log("Edited : " + arr[i]);
    ul.innerHTML = ""
    let edit = prompt("Edit your code ");
    arr.splice(i, 1, edit);
    console.log("edit");
    ul.innerHTML = ""
    rendorTodo();
    todo.value = "";
}

  
function deleteTodo(i) {
    console.log("Delete :" + arr[i] );
    ul.innerHTML = ""
    arr.splice(i, 1);
    console.log(arr);
    rendorTodo();
    todo.value = "";

    
}



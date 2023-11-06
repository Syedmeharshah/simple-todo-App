
function add() {
    let text = document.querySelector("#txt").value;
    let list = document.querySelector("#list");
    if (text === "") {
        alert("Please enter text text");
    } else {
        console.log(text);
        list.innerHTML += `<li>${text}<button onclick="delete1()">Delete</button><button onclick="edit()">edit</button></li>`;


    }
    document.querySelector("#txt").value = "";
}
function delete1() {

    console.log("Deleted")
}
function edit() {

    console.log("Edited")
}


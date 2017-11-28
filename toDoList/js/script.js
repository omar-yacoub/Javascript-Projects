var input = prompt("What do you want to select?");
var toDoList = ["eat"];


while (input !== "quit") {
    if (input === "list") {
        listTodo();
    } else if (input === "new"){
        newTodo();
    }  else if (input === "delete"){
        deteleTodo();
    }
    // ask again
    input = prompt("What do you want to select?");
}
console.log("you exit the app!");

function listTodo(){
    console.log("**********");
    toDoList.forEach(function(list,index){  
        console.log(index + ": " + list);
    })
    console.log("**********");
}

function newTodo(){
    var newTodo = prompt("What to do you want add?");
    toDoList.push(newTodo);
    console.log(newTodo + " added to the to do list");
}

function deteleTodo(){
    // ask for index of todo to be deleted
    var index = prompt("What is index do you want to Delete? ")
    // delete that to do
    toDoList.splice(index,1);
    console.log("index (" + index +") is deleted.");
}
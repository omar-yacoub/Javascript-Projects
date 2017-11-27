var input = prompt("What do you want to select?");
var toDoList = ["eat"];


while (input !== "quit") {
    if (input === "list") {
        toDoList.forEach(function(list,index){  
            console.log(index + ": " + list);
        })
    } else if (input === "add"){
        input = prompt("What to do you want add?");
        toDoList.push(input);
        console.log(input + " added to the to do list");
    }

    input = prompt("What do you want to select?");
}

console.log("you exit the app!");

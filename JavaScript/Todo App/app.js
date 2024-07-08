let todo = [];

while(true){
    let req = prompt("Enter Your Request");
    if(req == "quit"){
        console.log("Quiting app");
        break;
    }
    else{
while(req != null){
    
     if(req == "list"){
        console.log("------------------------------------------");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-------------------------------------------");
        break;
    }
    else if(req == "add"){
        let task = prompt("Enter your task");
        todo.push(task);
        console.log("task added");
        break;
    }
    else if(req == "delete"){
       let index = prompt("enter the no task that you want to delete");
        todo.splice(index,1);
        console.log("task deleted");
        break;
    }
    else{
        console.log("Wrong input");
        break;
    }
}
}
}
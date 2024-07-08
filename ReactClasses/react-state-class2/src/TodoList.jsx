import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import { useState } from "react"
export default function TodoList() {
    let [todos,setTodos] = useState([{task : "sample Task", id : uuidv4() , isDone :false}]);
    let [newTodo,setNewTodo] = useState("");

    let newTask = () => {
        setTodos((prevTodo) => {
         return   ([...prevTodo,{task : newTodo,id : uuidv4(), isDone : false}])
        });
        setNewTodo("");
    };

    let updateTask = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodo) => {
            return prevTodo.filter((prevTodo) =>  prevTodo.id != id);
        });
        
    };

    let markAllDone = () => {
      setTodos((todos) = 
        todos.map((todo) => {
          return {
            ...todo,
          isDone : true,
          }
            
          
        })
    ) 
    };

    let markAsDone = (id) => {
        setTodos((todos) = 
        todos.map((todo) => {
          if(todo.id == id) {
            return {
            ...todo,
            isDone : true,
          }}
          else {
            return  todo;
          }
            
          
        })
    ) 
    }
  
    return(
        <div className='MainClass'>
            <input placeholder="add a task" value={newTodo} onChange={updateTask} />
            <br /><br />
            <button onClick={newTask}>Add Task</button>
            <br /><br />
            <hr />
            <h2> Todo To Do </h2> 
            <ul>
                { todos.map((todo) => {
                  return (
                    <li key = {todo.id}>
                        <span style={todo.isDone ? {textDecoration:"line-through"} : {}}>{todo.task}    </span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ) ;
                
                 })
                }
            </ul>
            <br /><br />
            <button onClick={markAllDone}>Mark as Done To All</button>
            
        </div>
    );
}
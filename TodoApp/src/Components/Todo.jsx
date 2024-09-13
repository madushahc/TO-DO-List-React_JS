import { useState } from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";

export default function Todo(){
    const [todo,setTodo]= useState("");
    const [todos,setTodos]= useState([]);
    function handleTodo (e) {
        e.preventDefault();
        setTodo("");
        setTodos([...todos,todo]);
        
    }

    return (
        <div> 
            <Header />
            <form onSubmit={handleTodo}>
            <label>Add ToDos  </label>
            <input type="text" onChange= {(e) => setTodo(e.target.value)} value={todo}/>
            <button type="submit">ADD</button>
            </form>
            {console.log(todos)}
            {todos.map((item)=>( <TodoItem key={item} item={item}/>))}
        </div>
    );
}
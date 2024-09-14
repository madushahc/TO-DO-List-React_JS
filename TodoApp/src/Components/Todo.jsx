import { useState } from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";
import Styles from "../Modules/todo.module.css";

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
            <form className={Styles.form} onSubmit={handleTodo}>
            <div className={Styles.container}>
            <input className={Styles.input} type="text" onChange= {(e) => setTodo(e.target.value)} value={todo} placeholder="Enter Todo Items"/>
            <button className={Styles.btn}type="submit">ADD</button>
            </div>
            </form>
            {console.log(todos)}
             <div className={Styles.list}>{todos.map((item)=>( <TodoItem  key={item} item={item} setTodos={setTodos}
              todos={todos}/>))}</div>
            
        </div>
    );
}
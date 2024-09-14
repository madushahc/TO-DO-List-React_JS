import { useState } from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";
import Styles from "../Modules/todo.module.css";
import Footer from "./Footer";

export default function Todo(){
    const [todo,setTodo]= useState({name:"", done: false});
    const [todos,setTodos]= useState([]);
    const completedTodos= todos.filter((todo) => todo.done).length;
    const totalTodos=todos.length;
    const sortTodos= todos.slice().sort((a,b) => Number(a.done) - Number(b.done));

    function handleTodo (e) {
        e.preventDefault();
        setTodo({name:"", done: false});
        setTodos([...todos,todo]);
        
    }

    return (
        <div> 
            <Header />
            <form className={Styles.form} onSubmit={handleTodo}> 
            <div className={Styles.container}>
            <input className={Styles.input} type="text" onChange= {(e) => setTodo({name:e.target.value, done : false})} value={todo.name} placeholder="Enter Todo Items"/>
            <button className={Styles.btn}type="submit">ADD</button>
            </div>
            </form>
            {console.log(todos)}

             <div className={Styles.list}>
                {sortTodos.map((item)=>( <TodoItem  key={item.name} item={item} setTodos={setTodos}
              todos={todos}/>))}
              </div>
            <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
        </div>
    );
}
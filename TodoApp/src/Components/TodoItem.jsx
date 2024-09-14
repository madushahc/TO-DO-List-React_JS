import Styles from "../Modules/todoitem.module.css";
export default function TodoItem({item, todos, setTodos}){
    
    function handleDelete(item){
        console.log("Delete Item",item);
        setTodos(todos.filter((todo) => todo !== item));
    }
    return(
        <div className={Styles.item}>
             <div className={Styles.itemName}>
            {item} 
             <span><button onClick={() =>handleDelete(item)} className={Styles.delebtn} >X</button></span>
        </div>
       
        <hr className={Styles.line}></hr>
        </div>
    );
}
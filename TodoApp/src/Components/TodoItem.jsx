import Styles from "../Modules/todoitem.module.css";
export default function TodoItem({item, todos, setTodos}){
    
    function handleDelete(item){
        console.log("Delete Item",item);
        setTodos(todos.filter((todo) => todo !== item));
    }

    function handleClick(name){
        const newArray  = todos.map((todo)=> todo.name === name ? {...todo, done:!todo.done} :todo)
        setTodos(newArray);
    }

    const CSS= item.done ? Styles.complete:"";
    
    return(
        <div className={Styles.item}>
             <div className={Styles.itemName}>
            <span onClick={() =>handleClick(item.name)} className={CSS}> {item.name} 
                        </span>
            
             <span><button onClick={() =>handleDelete(item)} className={Styles.delebtn} >X</button></span>
        </div>
       
        <hr className={Styles.line}></hr>
        </div>
    );
}
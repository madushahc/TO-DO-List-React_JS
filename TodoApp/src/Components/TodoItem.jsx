import Styles from "../Modules/todoitem.module.css";
export default function TodoItem({item}){
    return(
        <div className={Styles.item}>
             <div className={Styles.itemName}>
            {item}  <span><button className={Styles.delebtn}>X</button></span>
        </div>
       
        <hr className={Styles.line}></hr>
        </div>
    );
}
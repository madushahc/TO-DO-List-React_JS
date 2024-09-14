import Styles from "../Modules/footer.module.css";

export default function Footer({completedTodos, totalTodos}){
    
    return(
        <div className={Styles.footer}>
            <span className={Styles.item}>
            Completed Todos {completedTodos}
              </span> 
              <span className={Styles.item}>
            Total Todos {totalTodos}
              </span> 
        </div>
    );
}
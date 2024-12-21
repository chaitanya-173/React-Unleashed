import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;    // object destructuring
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;

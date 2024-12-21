import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { handleDeleteItem } = useContext(TodoItemsContext);
  
  return (
    <div className="container">
      <div className="row cc-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger cc-button"
            onClick={() => {
              handleDeleteItem(todoName);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

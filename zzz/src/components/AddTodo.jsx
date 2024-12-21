import { useRef } from "react";

function AddTodo({ onNewItem }) {
  const newTodoItem = useRef();
  const newDueDate = useRef();

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName = newTodoItem.current.value;
    const dueDate = newDueDate.current.value;
    newTodoItem.current.value = "";
    newDueDate.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container">
      <form className="row cc-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here" ref={newTodoItem} />
        </div>
        <div className="col-4">
          <input type="date" ref={newDueDate} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success cc-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

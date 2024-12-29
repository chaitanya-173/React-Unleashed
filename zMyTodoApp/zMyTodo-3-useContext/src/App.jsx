import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, dueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: dueDate },
    ]);
  };

  const deleteItem = (itemName) => {
    setTodoItems((prevItems) =>
      prevItems.filter((item) => item.name !== itemName)
    );
  };

  return (
    <TodoItemsContext.Provider
      value={{           // value={{
        todoItems,       //   todoItems: todoItems,
        addNewItem,      //   addNewItem: addNewItem,
        deleteItem,      //   deleteItem: deleteItem,
      }}                 // }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

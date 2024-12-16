import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {

  const [todoitems, setTodoitems] = useState([]);

  const todoItems = [
    {
      name: "Learn React",
      dueDate: "10/12/2024",
    },
    {
      name: "Grind DSA",
      dueDate: "11/12/2024",
    },
    { 
      name: "Meet Friends",
      dueDate: "12/12/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;

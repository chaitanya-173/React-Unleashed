import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
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
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;

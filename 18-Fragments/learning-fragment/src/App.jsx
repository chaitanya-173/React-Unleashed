import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  let foodItems = ["Dal", "Green-Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </React.Fragment>
  );
}

export default App;

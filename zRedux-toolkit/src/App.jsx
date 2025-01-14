import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counterSlice";
import { useState } from "react";

function App() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(increment());
  };

  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleIncAmountClick = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <br />
      <input type='number' value={amount} placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)}/>
      <br />
      <br />
      <button onClick={handleIncAmountClick}>Inc by Amount</button>
    </div>
  );
}

export default App;

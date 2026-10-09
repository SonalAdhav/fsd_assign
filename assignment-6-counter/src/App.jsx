import { useState } from "react";
import "./App.css";

function App() {
  // count = current value, setCount = function to update it
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Colour the number based on its value
  const tone = count > 0 ? "positive" : count < 0 ? "negative" : "zero";

  return (
    <main className="app">
      <section className="counter">
        <h1>Counter</h1>

        <p className={`value ${tone}`} aria-live="polite">
          {count}
        </p>

        <div className="buttons">
          <button className="btn minus" onClick={decrement}>
            Decrement
          </button>
          <button className="btn reset" onClick={reset}>
            Reset
          </button>
          <button className="btn plus" onClick={increment}>
            Increment
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;

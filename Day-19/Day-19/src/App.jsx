import Conditional from "./Conditional";
import Counter from "./Counter";
import Toggle from "./Toggle";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>React State and Conditional Rendering</h1>

      <Conditional />

      <Counter />

      <Toggle />
    </div>
  );
}

export default App;
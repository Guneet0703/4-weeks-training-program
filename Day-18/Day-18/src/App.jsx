import Home from "./Home";
import About from "./About";
import Card from "./Card";

function App() {
  return (
    <div className="container">
      <h1>React Components & Props</h1>

      <Home name="Guneet" age={19} />

      <About />

      <Card
        title="React"
        description="React is a JavaScript library for building user interfaces."
      />

      <Card
        title="MERN Stack"
        description="MERN stands for MongoDB, Express.js, React.js, and Node.js."
      />
    </div>
  );
}

export default App;
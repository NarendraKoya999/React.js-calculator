import Calculator from "./Components/Calculator";
import "./App.css"; // Assuming you have some CSS styles in this file

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <Calculator />
    </div>
  );
};

export default App;

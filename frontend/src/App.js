import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Twitter: React, Go and MongoDB </p>{" "}
        <a
          className="App-link"
          href="https://carloscaravaca.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          e2517 Github{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default App;

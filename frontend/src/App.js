import logo from "./logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [axiosData, setAxiosData] = useState([]);
  useEffect(() => {
    const fetchAxiosData = async () => {
      const response = await axios.get("http://localhost:8080/users");
      setAxiosData(response);
    };
    fetchAxiosData();
    return () => {};
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <prev>{JSON.stringify(axiosData)}</prev>
      </header>
    </div>
  );
}

export default App;

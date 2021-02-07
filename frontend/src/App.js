import logo from "./logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [axiosData, setAxiosData] = useState([]);
  useEffect(() => {
    const API_PORT = process.env.REACT_APP_API_PORT | 8080;
    const API_URL = process.env.REACT_APP_API_URL | "localhost";

    const fetchAxiosData = async () => {
      const response = await axios.get(`http://${API_URL}:${API_PORT}/users`);
      setAxiosData(response);
    };
    fetchAxiosData();
    return () => {};
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to react js with docker
        {JSON.stringify(axiosData)}
      </header>
    </div>
  );
}

export default App;

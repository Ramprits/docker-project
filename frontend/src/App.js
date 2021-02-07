import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const API_PORT = process.env.REACT_APP_API_PORT | 8080;
    const API_URL = process.env.REACT_APP_API_URL | "localhost";
    const fetchAxiosData = async () => {
      const response = await axios.get(`http://${API_URL}:${API_PORT}/users`);
      setUsers(response.data.users);
    };
    fetchAxiosData();
    return () => {};
  }, []);
  return (
    <div className="container mt-5">
      <div className="columns is-multiline">
        {users &&
          users.map((user) => (
            <div className="column is-4" key={user._id}>
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <p>{user.name}</p>
                    Phasellus nec iaculis mauris
                    <p>{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;

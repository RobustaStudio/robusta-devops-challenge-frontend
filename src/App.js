import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name} - Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

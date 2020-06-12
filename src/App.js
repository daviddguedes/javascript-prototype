import React, { useEffect, useState } from "react";
import "./App.css";
import Person from "./Person";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const camila = new Person({ name: "Camila Guedes", age: 14 });
    setUser(camila);
  }, []);

  return (
    user && (
      <div className="App">
        <h1>Welcome, {user.name}!!!</h1>
        <h2>
          {user.isAbleTo()
            ? "Congratulations! You have been authorized!"
            : "Unfortunately, you were not authorized."}
        </h2>
        <h1>Your code is: {user.randomKeys()}</h1>
        <h1>Ticket number: {user.generateHash()}</h1>
      </div>
    )
  );
}

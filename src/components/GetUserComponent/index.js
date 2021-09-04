import { useState } from "react";
import "./styles.css";

function GetUserComponent({ setUser, setIsLoggedIn, user }) {
  const [userInput, setUserInput] = useState("");

  function HandleLogin(userInput) {
    setUser(userInput);
    console.log(user);
    setIsLoggedIn(true);
  }

  return (
    <form className="form">
      <h2>Faça o login</h2>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
    </form>
  );
}
export default GetUserComponent;

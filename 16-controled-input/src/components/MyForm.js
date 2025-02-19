import { useState } from "react";

function MyForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    const userData = { username: username, password: password };
    console.log(userData);
    alert(JSON.stringify(userData));
  }

  return (
    <div className="form">
      <h1>My form with controled inputs</h1>
      <form>
        <div>
          <label>insert your Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label>insert your Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit" onClick={handleFormSubmit}>
          send data
        </button>
      </form>
    </div>
  );
}
export default MyForm;

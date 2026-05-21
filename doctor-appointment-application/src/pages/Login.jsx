import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <Navbar />

      <div className="login-form">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
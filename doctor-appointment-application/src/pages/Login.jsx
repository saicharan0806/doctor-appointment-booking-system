import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

    const users =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const userFound =
      users.find(
        (user) =>
          user.email === email &&
          user.password === password
      );

    if (userFound) {

      localStorage.setItem(
        "user",
        JSON.stringify(userFound)
      );

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful");

      navigate("/");
    }

    else {

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
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;
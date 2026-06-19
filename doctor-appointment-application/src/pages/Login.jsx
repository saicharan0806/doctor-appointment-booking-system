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

    // Admin Login
    if (
      email === "admin@hospital.com" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "role",
        "admin"
      );

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert(
        "Admin Login Successful"
      );

      navigate("/admin");

      return;
    }

    // Patient Login
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

      localStorage.setItem(
        "role",
        "patient"
      );

      alert(
        "Patient Login Successful"
      );

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

        <p
          style={{
            marginTop: "15px",
            fontSize: "14px",
          }}
        >
          Admin Login:
          admin@hospital.com /
          admin123
        </p>

      </div>

    </div>
  );
}

export default Login;
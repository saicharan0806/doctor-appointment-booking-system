import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Signup Successful");
  };

  return (
    <div className="signup-container">
      <Navbar />

      <div className="signup-form">
        <h1>Signup</h1>

        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <button onClick={handleSignup}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Signup;
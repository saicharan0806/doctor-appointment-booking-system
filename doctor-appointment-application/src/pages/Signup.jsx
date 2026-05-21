import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      name,
      email,
      contact,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Signup Successful");
  };

  return (
    <div className="signup-container">
      <Navbar />

      <div className="signup-form">
        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Contact Number"
          onChange={(e) => setContact(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button onClick={handleSignup}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Signup;
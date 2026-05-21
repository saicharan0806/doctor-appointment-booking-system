import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Signup.css";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleSignup = () => {

    // Check Empty Fields
    if (
      !name ||
      !email ||
      !contact ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    // Password Match Validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Store User Data
    const userData = {
      name,
      email,
      contact,
      password,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    alert("Signup Successful");

    // Clear Fields
    setName("");
    setEmail("");
    setContact("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <Navbar />

      <div className="signup-container">

        <div className="signup-form">

          <h1>Create Account</h1>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) =>
              setContact(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

          <button onClick={handleSignup}>
            Register
          </button>

        </div>

      </div>
    </>
  );
}

export default Signup;
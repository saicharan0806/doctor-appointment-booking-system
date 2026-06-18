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

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {

      alert(
        "Password must contain:\n" +
        "• At least 8 characters\n" +
        "• One uppercase letter\n" +
        "• One lowercase letter\n" +
        "• One number\n" +
        "• One special character"
      );

      return;
    }

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

    const existingUsers =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    const userExists =
      existingUsers.find(
        (user) => user.email === email
      );

    if (userExists) {
      alert("User already exists");
      return;
    }

    existingUsers.push(userData);

    localStorage.setItem(
      "users",
      JSON.stringify(existingUsers)
    );

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    alert("Signup Successful");

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

          <p className="password-hint">
            Password must contain at least 8
            characters, one uppercase letter,
            one lowercase letter, one number
            and one special character.
          </p>

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
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
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>HealthCare+</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/signup">
          <button className="signup-btn">Signup</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
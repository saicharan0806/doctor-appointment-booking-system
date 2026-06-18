import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  const handleLogout = () => {

    localStorage.removeItem(
      "isLoggedIn"
    );

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>HealthCare+</h2>
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/doctors">
          Doctors
        </Link>

        <Link to="/booking">
          Booking
        </Link>

        <Link to="/history">
          History
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <Link to="/admin">
          Admin
        </Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="login-btn">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="signup-btn">
                Signup
              </button>
            </Link>
          </>
        ) : (
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;
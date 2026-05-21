import Navbar from "../components/Navbar";
import "../styles/Navbar.css";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />

      <div className="hero-section">
        <h1>
          Digital Healthcare <br />
          Appointment Booking Platform
        </h1>

        <p>
          Book appointments with doctors easily and manage
          your healthcare online.
        </p>

        <button className="hero-btn">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default Home;
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import hospitalImage from "../images/hospital.jpg";

function Home() {
  return (
    <div className="home-container">
      <Navbar />

      <div className="hero-section">
        <div className="hero-left">
          <h1>
            Digital Healthcare <br />
            Appointment Booking Platform
          </h1>

          <p>
            Book doctor appointments easily and manage
            your healthcare services online with a modern
            digital platform.
          </p>

          <button className="hero-btn">
            Book Appointment
          </button>
        </div>

        <div className="hero-right">
          <img src={hospitalImage} alt="Hospital" />
        </div>
      </div>
    </div>
  );
}

export default Home;
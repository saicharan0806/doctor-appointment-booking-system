import { useState } from "react";

import doctors from "../data/doctors";

import Navbar from "../components/Navbar";

import "../styles/Doctors.css";

function Doctors() {

  const [search, setSearch] = useState("");

  const [specialty, setSpecialty] =
    useState("All");

  const filteredDoctors = doctors.filter(
    (doctor) => {

      const matchSearch =
        doctor.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchSpecialty =
        specialty === "All" ||
        doctor.specialty === specialty;

      return matchSearch && matchSpecialty;
    }
  );

  return (
    <>
      <Navbar />

      <div className="doctors-page">

        <h1>Find Your Doctor</h1>

        <div className="filters">

          <input
            type="text"
            placeholder="Search doctor..."
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            onChange={(e) =>
              setSpecialty(e.target.value)
            }
          >

            <option>All</option>
            <option>Cardiologist</option>
            <option>Dermatologist</option>
            <option>Neurologist</option>
            <option>Pediatrician</option>

          </select>

        </div>

        <div className="doctor-grid">

          {filteredDoctors.map((doctor) => (

            <div
              className="doctor-card"
              key={doctor.id}
            >

              <img
                src={doctor.image}
                alt={doctor.name}
              />

              <h2>{doctor.name}</h2>

              <p>{doctor.specialty}</p>

              <p>{doctor.experience}</p>

              <button>
                Book Appointment
              </button>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Doctors;
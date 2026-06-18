import Navbar from "../components/Navbar";
import doctors from "../data/doctors";

import "../styles/Admin.css";

function Admin() {

  const bookings =
    JSON.parse(
      localStorage.getItem("bookings")
    ) || [];

  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  const doctorsCount =
    doctors.length;

  return (
    <>
      <Navbar />

      <div className="admin-page">

        <h1>Admin Dashboard</h1>

        <div className="admin-grid">

          <div className="admin-card">

            <h2>Total Doctors</h2>

            <p>{doctorsCount}</p>

          </div>

          <div className="admin-card">

            <h2>Total Patients</h2>

            <p>{users.length}</p>

          </div>

          <div className="admin-card">

            <h2>Total Appointments</h2>

            <p>{bookings.length}</p>

          </div>

        </div>

        <div className="booking-section">

          <h2>All Bookings</h2>

          {bookings.length === 0 ? (

            <p>No Bookings Available</p>

          ) : (

            bookings.map(
              (booking, index) => (

                <div
                  className="booking-card"
                  key={index}
                >

                  <p>
                    <strong>Patient:</strong>{" "}
                    {booking.patientName}
                  </p>

                  <p>
                    <strong>Doctor:</strong>{" "}
                    {booking.doctorName}
                  </p>

                  <p>
                    <strong>Specialty:</strong>{" "}
                    {booking.specialty}
                  </p>

                  <p>
                    <strong>Date:</strong>{" "}
                    {booking.date}
                  </p>

                  <p>
                    <strong>Slot:</strong>{" "}
                    {booking.slot}
                  </p>

                </div>
              )
            )

          )}

        </div>

      </div>
    </>
  );
}

export default Admin;
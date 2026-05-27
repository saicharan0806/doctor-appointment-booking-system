import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import "../styles/History.css";

function History() {

  const [bookings, setBookings] =
    useState([]);

  useEffect(() => {

    const storedBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];
    if(storedBookings){
      setBookings(storedBookings);
    }

  }, []);

  const cancelBooking = (index) => {

    const updatedBookings =
      bookings.filter(
        (_, i) => i !== index
      );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    alert("Appointment Cancelled");
  };

  return (
    <>
      <Navbar />

      <div className="history-page">

        <h1>Booking History</h1>

        {bookings.length === 0 ? (

          <p className="no-bookings">
            No Appointments Found
          </p>

        ) : (

          <div className="history-grid">

            {bookings.map(
              (booking, index) => (

                <div
                  className="history-card"
                  key={index}
                >

                  <h2>
                    {booking.patientName}
                  </h2>

                  <p>
                    Date: {booking.date}
                  </p>

                  <p>
                    Slot: {booking.slot}
                  </p>

                  <button
                    onClick={() =>
                      cancelBooking(index)
                    }
                  >
                    Cancel Appointment
                  </button>

                </div>
              )
            )}

          </div>
        )}

      </div>
    </>
  );
}

export default History;
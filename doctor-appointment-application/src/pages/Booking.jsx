import { useState } from "react";

import Navbar from "../components/Navbar";

import "../styles/Booking.css";

function Booking() {

  const [patientName, setPatientName] =
    useState("");

  const [date, setDate] = useState("");

  const [slot, setSlot] = useState("");

  const slots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "4:00 PM",
  ];

  const handleBooking = () => {

    if (
      !patientName ||
      !date ||
      !slot
    ) {
      alert("Please fill all fields");
      return;
    }

    const booking = {
      patientName,
      date,
      slot,
    };

    const existingBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    existingBookings.push(booking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(existingBookings)
    );

    alert("Appointment Booked Successfully");

    setPatientName("");
    setDate("");
    setSlot("");
  };

  return (
    <>
      <Navbar />

      <div className="booking-page">

        <div className="booking-form">

          <h1>Book Appointment</h1>

          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) =>
              setPatientName(e.target.value)
            }
          />

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />

          <select
            value={slot}
            onChange={(e) =>
              setSlot(e.target.value)
            }
          >

            <option value="">
              Select Time Slot
            </option>

            {slots.map((time, index) => (
              <option
                key={index}
                value={time}
              >
                {time}
              </option>
            ))}

          </select>

          <button onClick={handleBooking}>
            Confirm Booking
          </button>

        </div>

      </div>
    </>
  );
}

export default Booking;
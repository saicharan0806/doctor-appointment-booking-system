import { useState } from "react";

import Navbar from "../components/Navbar";

import "../styles/Booking.css";

function Booking() {

  const selectedDoctor =
    JSON.parse(
      localStorage.getItem(
        "selectedDoctor"
      )
    ) || {};

  const [patientName, setPatientName] =
    useState("");

  const [date, setDate] =
    useState("");

  const [slot, setSlot] =
    useState("");

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

    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    if (date < today) {
      alert(
        "Past dates are not allowed"
      );
      return;
    }

    const booking = {
      patientName,
      doctorName:
        selectedDoctor.name,
      specialty:
        selectedDoctor.specialty,
      date,
      slot,
      status: "Confirmed",
    };

    const existingBookings =
      JSON.parse(
        localStorage.getItem(
          "bookings"
        )
      ) || [];

    const duplicateBooking =
      existingBookings.find(
        (b) =>
          b.doctorName ===
            booking.doctorName &&
          b.date === booking.date &&
          b.slot === booking.slot &&
          b.status !==
            "Cancelled"
      );

    if (duplicateBooking) {
      alert(
        "This slot is already booked."
      );
      return;
    }

    existingBookings.push(
      booking
    );

    localStorage.setItem(
      "bookings",
      JSON.stringify(
        existingBookings
      )
    );

    alert(
      "Appointment Booked Successfully"
    );

    setPatientName("");
    setDate("");
    setSlot("");
  };

  return (
    <>
      <Navbar />

      <div className="booking-page">

        <div className="booking-form">

          <h1>
            Book Appointment
          </h1>

          <h3>
            Doctor:{" "}
            {selectedDoctor.name}
          </h3>

          <p>
            Specialty:{" "}
            {
              selectedDoctor.specialty
            }
          </p>

          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) =>
              setPatientName(
                e.target.value
              )
            }
          />

          <input
            type="date"
            value={date}
            min={
              new Date()
                .toISOString()
                .split("T")[0]
            }
            onChange={(e) =>
              setDate(
                e.target.value
              )
            }
          />

          <select
            value={slot}
            onChange={(e) =>
              setSlot(
                e.target.value
              )
            }
          >

            <option value="">
              Select Time Slot
            </option>

            {slots.map(
              (
                time,
                index
              ) => (
                <option
                  key={index}
                  value={time}
                >
                  {time}
                </option>
              )
            )}

          </select>

          <button
            onClick={
              handleBooking
            }
          >
            Confirm Booking
          </button>

        </div>

      </div>
    </>
  );
}

export default Booking;
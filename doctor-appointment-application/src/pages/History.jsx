import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import "../styles/History.css";

function History() {

  const [bookings, setBookings] =
    useState([]);

  const [editingIndex, setEditingIndex] =
    useState(null);

  const [newDate, setNewDate] =
    useState("");

  const [newSlot, setNewSlot] =
    useState("");

  const slots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "4:00 PM",
  ];

  useEffect(() => {

    const storedBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    setBookings(storedBookings);

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

  const startReschedule = (index) => {

    setEditingIndex(index);

    setNewDate(bookings[index].date);

    setNewSlot(bookings[index].slot);
  };

  const saveReschedule = (index) => {

    if (!newDate || !newSlot) {
      alert(
        "Please select date and slot"
      );
      return;
    }

    const updatedBookings =
      [...bookings];

    updatedBookings[index] = {
      ...updatedBookings[index],
      date: newDate,
      slot: newSlot,
    };

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setEditingIndex(null);

    alert(
      "Appointment Rescheduled Successfully"
    );
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

                  {editingIndex === index ? (
                    <>

                      <input
                        type="date"
                        value={newDate}
                        onChange={(e) =>
                          setNewDate(
                            e.target.value
                          )
                        }
                      />

                      <select
                        value={newSlot}
                        onChange={(e) =>
                          setNewSlot(
                            e.target.value
                          )
                        }
                      >

                        {slots.map(
                          (
                            slot,
                            slotIndex
                          ) => (
                            <option
                              key={
                                slotIndex
                              }
                              value={slot}
                            >
                              {slot}
                            </option>
                          )
                        )}

                      </select>

                      <button
                        onClick={() =>
                          saveReschedule(
                            index
                          )
                        }
                      >
                        Save Changes
                      </button>

                    </>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          startReschedule(
                            index
                          )
                        }
                      >
                        Reschedule
                      </button>

                      <button
                        onClick={() =>
                          cancelBooking(
                            index
                          )
                        }
                      >
                        Cancel Appointment
                      </button>
                    </>
                  )}

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
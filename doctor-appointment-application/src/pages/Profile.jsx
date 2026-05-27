import { useState } from "react";

import Navbar from "../components/Navbar";

import "../styles/Profile.css";

function Profile() {

  const storedUser =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const [name, setName] =
    useState(storedUser.name || "");

  const [email, setEmail] =
    useState(storedUser.email || "");

  const [contact, setContact] =
    useState(storedUser.contact || "");

  const updateProfile = () => {

    if (
      !name ||
      !email ||
      !contact
    ) {
      alert("Please fill all fields");
      return;
    }

    const updatedUser = {
      ...storedUser,
      name,
      email,
      contact,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    alert("Profile Updated Successfully");
  };

  return (
    <>
      <Navbar />

      <div className="profile-page">

        <div className="profile-card">

          <h1>Patient Profile</h1>

          <input
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="text"
            value={contact}
            placeholder="Contact Number"
            onChange={(e) =>
              setContact(e.target.value)
            }
          />

          <button onClick={updateProfile}>
            Update Profile
          </button>

        </div>

      </div>
    </>
  );
}

export default Profile;
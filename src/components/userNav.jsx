import React from "react";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <div>
      <nav className="navbar">
        {/* Left Section: Logo */}
        <div className="navbar-left">
          <div style={{ display: "flex", alignItems: "center" }} className="navbar-logo">
            <img
              style={{
                height: "75px",
                width: "auto",
                marginRight: "10px",
              }}
              src="logo.jpg"
              alt="logo"
            />
            <h1>Scholarship</h1>
          </div>
        </div>

        {/* Center Section: Navigation Links */}
        <ul className="navbar-links">
          <li>
            <Link to="/student">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Updates</Link>
          </li>
          <li>
            <Link to="/views">Scholarships</Link>
          </li>
          <li>
            <Link to="/track">Track Application</Link>
          </li>
        </ul>

        {/* Right Section: Profile Photo */}
        <div className="navbar-right">
          <img
            src="profile.jpg" // Replace with the actual path to the profile photo
            alt="Profile"
            className="profile-photo"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default UserNav;

import React from "react";
import "./ActiveApplications.css";
import { Link } from "react-router-dom";

const ActiveApplications = () => {
  const applications = [
    {
      id: 1,
      studentName: "John Doe",
      studentImage: "https://via.placeholder.com/100",
      scholarshipName: "STEM Scholarship",
      appliedDate: "2024-11-01",
      status: "Active",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      studentImage: "https://via.placeholder.com/100",
      scholarshipName: "Arts Grant",
      appliedDate: "2024-10-15",
      status: "Active",
    },
    {
      id: 3,
      studentName: "Michael Johnson",
      studentImage: "https://via.placeholder.com/100",
      scholarshipName: "Sports Fund",
      appliedDate: "2024-09-20",
      status: "Active",
    },
  ];

  return (
    <div className="applications-container">
      <h1 className="page-title">Active Applications</h1>
      <div className="applications-list">
        {applications.map((app) => (
          <div key={app.id} className="application-card">
            <div className="student-info">
              <img
                src={app.studentImage}
                alt={`${app.studentName}'s profile`}
                className="student-image"
              />
              <div>
                <h3 className="student-name">{app.studentName}</h3>
                <p className="scholarship-name">{app.scholarshipName}</p>
              </div>
            </div>
            <div className="application-details">
              <p>
                <strong>Applied Date:</strong> {app.appliedDate}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={`status-tag ${app.status.toLowerCase()}`}>
                  {app.status}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/dashboard">
          <button className="explore-button" role="button">Back</button>
        </Link>
    </div>
  );
};

export default ActiveApplications;

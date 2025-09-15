import React from "react";
import "./AwardedScholarships.css";
import { Link } from "react-router-dom";

const AwardedScholarships = () => {
  const awardedScholarships = [
    {
      id: 1,
      studentName: "John Doe",
      studentImage: "https://via.placeholder.com/100",
      scholarshipName: "STEM Scholarship",
      amount: "$20,000",
      awardedDate: "2024-10-15",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      studentImage: "https://via.placeholder.com/100",
      scholarshipName: "Arts Grant",
      amount: "$15,000",
      awardedDate: "2024-09-20",
    },
    {
      id: 3,
      studentName: "Michael Johnson",
      studentImage: "https://via.placeholder.com/100",
      scholarshipName: "Sports Fund",
      amount: "$10,000",
      awardedDate: "2024-08-30",
    },
  ];

  return (
    <div className="awarded-container">
        
      <h1 className="page-title">Awarded Scholarships</h1>
      <div className="awarded-list">
        {awardedScholarships.map((scholarship) => (
          <div key={scholarship.id} className="scholarship-card">
            <div className="student-info">
              <img
                src={scholarship.studentImage}
                alt={`${scholarship.studentName}'s profile`}
                className="student-image"
              />
              <div>
                <h3 className="student-name">{scholarship.studentName}</h3>
                <p className="scholarship-name">{scholarship.scholarshipName}</p>
              </div>
            </div>
            <div className="scholarship-details">
              <p>
                <strong>Amount:</strong> {scholarship.amount}
              </p>
              <p>
                <strong>Awarded Date:</strong> {scholarship.awardedDate}
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

export default AwardedScholarships;

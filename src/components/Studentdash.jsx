import React from 'react';
import './Studentdash.css';
import UserNav from './userNav';

const Studentdash = () => {
  const savedFirstname=localStorage.getItem("firstname");
  const savedEmail=localStorage.getItem("email")
  const savedCollege=localStorage.getItem("collegename");
  const savedCourse=localStorage.getItem("course");
  const savedYear=localStorage.getItem("year");
  const savedId=localStorage.getItem("id");

  const profile = {
    name: savedFirstname || "",
    email: savedEmail|| "",
    studentId: savedId||"",
    activeStatus: 'Active',
  };

  const college = {
    name: savedCollege||"",
    course: savedCourse||"",
    year: savedYear||"",
  };

  const scholarships = [
    {
      name: 'Merit-Based Scholarship',
      status: 'Approved',
      amount: '$5,000',
      remarks: 'Disbursed',
    },
    {
      name: 'Sports Scholarship',
      status: 'Pending',
      amount: '-',
      remarks: 'Under Review',
    },
  ];

  return (
    <div>
    <UserNav/>
    <div className="dashboard">
      {/* Header */}
      <header>
        <h1 style={{color:"white"}} >Student Dashboard</h1>
      </header>

      {/* Profile Section */}
      <section className="profile">
        <div className="profile-info">
          <h2 style={{
  background: "linear-gradient(to right, #b927fc 0%, #2c64fc 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
}}
        >Profile Details</h2>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Student ID:</strong> {profile.studentId}</p>
          <p><strong>Active Status:</strong> {profile.activeStatus}</p>
        </div>
        <div className="college-info">
          <h2 style={{
  background: "linear-gradient(to right, #b927fc 0%, #2c64fc 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
}}
 >College Details</h2>
          <p><strong>College Name:</strong> {college.name}</p>
          <p><strong>Course:</strong> {college.course}</p>
          <p><strong>Passout Year:</strong> {college.year}</p>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="scholarships">
        <h2 style={{
  background: "linear-gradient(to right, #b927fc 0%, #2c64fc 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
}}
 >Scholarship Applications</h2>
        <table>
          <thead>
            <tr>
              <th>Scholarship Name</th>
              <th>Status</th>
              <th>Amount Received</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.map((scholarship, index) => (
              <tr key={index}>
                <td>{scholarship.name}</td>
                <td>{scholarship.status}</td>
                <td>{scholarship.amount}</td>
                <td>{scholarship.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer className='student-foot'>
        <p>&copy; 2024 Scholarship Management System</p>
      </footer>
    </div>
    </div>
  );
};

export default Studentdash;

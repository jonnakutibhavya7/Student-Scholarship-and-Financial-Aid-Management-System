import React,{useState} from "react";
import "./Dashboard.css";

import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(formData);

  axios.post('https://scholar-ship-backend-production.up.railway.app/applicantInfo/dashboard',formData).then((res)=>{
    alert(res.data);
  })

  alert("added successfully");
};

  const [formData, setFormData] = useState({
    scholarname:"",
    eligibility:"",
    amount:"",
    deadline:"",

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleDateChange = (name, date) => {
    setFormData((prev) => ({ ...prev, [name]: date }));
  };
  




  const stats = [
    { title: "Total Scholarships Available", count: 120, color: "#4caf50", route: "/scholarshipsavailable" },
    { title: "Active Applications", count: 35, color: "#2196f3", route: "/activeapp" },
    { title: "Awarded Scholarships", count: 25, color: "#ff9800", route: "/awarded" },
  ];

  const scholarships = [
    {
      id: 1,
      name: "STEM Scholarship",
      amount: "$5,000",
      status: "Active",
      deadline: "Nov 25, 2024",
    },
    {
      id: 2,
      name: "Arts Grant",
      amount: "$3,000",
      status: "Closed",
      deadline: "Dec 10, 2024",
    },
    {
      id: 3,
      name: "Sports Fund",
      amount: "$2,500",
      status: "Active",
      deadline: "Dec 15, 2024",
    },
    {
      id: 4,
      name: "Merit Scholarship",
      amount: "$10,000",
      status: "Awarded",
      deadline: "Dec 28, 2024 ", // No deadline for this scholarship
    },
  ];

  return (
    <div>
      {/* Navbar Section */}
      <div className="dashboard-container">
        <h1 className="dashboard-title">Admin Dashboard</h1>

        {/* Stats Section */}
        <div className="stats-container">
          {stats.map((stat, index) => (
            <button
            key={index}
            className="stat-card"
            style={{ borderColor: stat.color }}
            onClick={() => navigate(stat.route)} // Navigate to home page
          >
            <h3 style={{ color: stat.color }}>{stat.count}</h3>
            <p>{stat.title}</p>
          </button>
          ))}
        </div>

        {/* Scholarships Table */}
        <div className="section">
          <h2 className="section-title">Scholarships</h2>
          <table className="scholarship-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map((scholarship) => (
                <tr key={scholarship.id}>
                  <td>{scholarship.id}</td>
                  <td>{scholarship.name}</td>
                  <td>{scholarship.amount}</td>
                  <td
                    className={`status ${scholarship.status.toLowerCase()}`}
                  >
                    {scholarship.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming Deadlines */}
        <div className="section">
          <h2 className="section-title">Upcoming Deadlines</h2>
          <ul className="deadlines-list">
            {scholarships
              .filter((scholarship) => scholarship.deadline) // Only scholarships with deadlines
              .map((scholarship) => (
                <li key={scholarship.id} className="deadline-item">
                  <span className="deadline-name">{scholarship.name}</span>
                  <span className="deadline-date">{scholarship.deadline}</span>
                </li>
              ))}
          </ul>
        </div>
        <div>
        <h2>Add scholarship deatils</h2>
        <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}>
          <div className="form-row">
            <div className="form-group">
              <label> Name of the SCHOLAR Ship schema</label>
              <input type="text" name="scholarname" value={formData.scholarname} placeholder="schema name" required onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label> Eligibility </label>
              <input type="text" name="eligibility" value={formData.eligibility} placeholder="Eligibility criteria" required onChange={handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
            <label> Scholarship funding amount</label>
            <input type="number" name="amount" placeholder="amount" value={formData.amount} onChange={handleChange} required />
            </div>
            <div className="form-group">
            <label> DeadLine Date</label>
            <DatePicker
            selected={formData.deadline}
            onChange={(deadline)=>handleDateChange("deadline",deadline)}
            required
            name="deadline"
            dateFormat="MM/dd/yyyy" 
            placeholderText="Select deadline date"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select" // Allows dropdowns for month and year
            className="date-picker-input" // Optional custom styling class
            />
            </div>
          </div>
          <button type="submit"  className="button-sch">ADD NOW</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

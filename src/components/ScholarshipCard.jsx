import React from 'react';
import { Link } from 'react-router-dom';

const ScholarshipCard = ({ scholarship }) => {
  const curl = window.location.href
  if(curl==='http://localhost:3000/views')
  return (
    <div className="scholarship-card">
      <h2>{scholarship.scholarname}</h2>
      <p>Amount: {scholarship.amount}</p>
      <p>Deadline: {scholarship.deadline}</p>
      <p>Eligibility: {scholarship.eligibility}</p>
      <Link to="/apply" className="apply-app">Apply Now</Link>
    </div>
    );
  else if(curl==='http://localhost:3000/view')
    return (
      <div className="scholarship-card">
        <h2>{scholarship.scholarname}</h2>
        <p>Amount: {scholarship.amount}</p>
        <p>Deadline: {scholarship.deadline}</p>
        <p>Eligibility: {scholarship.eligibility}</p>
        <Link to="/how-to-apply" className="apply-app">Apply Now</Link>
      </div>
    );
    else
      return (
        <div className="scholarship-card">
          <h2>{scholarship.scholarname}</h2>
          <p>Amount: {scholarship.amount}</p>
          <p>Deadline: {scholarship.deadline}</p>
          <p>Eligibility: {scholarship.eligibility}</p>
        </div>
      );
};

export default ScholarshipCard;

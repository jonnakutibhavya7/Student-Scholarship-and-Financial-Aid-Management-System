import React, { useEffect, useState } from 'react';
import ScholarshipCard from './ScholarshipCard';
import './ScholarShip.css';
import UserNav from './userNav';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios'




const ScholarshipList = () => {
  const [scholarships,setScholarships]=useState([]);
  useEffect(()=>{
    axios.get("https://scholar-ship-backend-production.up.railway.app/applicantInfo/getdata").then((res)=>{
      setScholarships(res.data)
    })
  },[])

  const curl = window.location.href
  if(curl==='http://localhost:3000/views')
  return (
    <div >
    <UserNav/>
    <div className="scholarship-list">
      {scholarships.map((scholarship) => (
        <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
      ))}
    </div>
    </div>
  );

  else if(curl==='http://localhost:3000/view'){
  return (
    <div className='ship'>
    <Navbar/>
    <div className="scholarship-list">
      {scholarships.map((scholarship) => (
        <ScholarshipCard key={scholarship.id} scholarship={scholarship} />

      ))}
      
    </div>
    </div>
  );
}
else{
  return (
    <div>
      <Link to="/dashboard">
          <button className="explore-button" role="button">Back</button>
        </Link>
    <div className="scholarship-list">
      {scholarships.map((scholarship) => (
        <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
      ))}
    </div>
    
    </div>
  );
}
};


export default ScholarshipList;

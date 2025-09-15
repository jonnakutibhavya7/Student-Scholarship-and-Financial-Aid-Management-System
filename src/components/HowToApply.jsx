import React from "react";
import "./HowToApply.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const HowToApply = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1: Log In or Sign Up",
      description:
        "Create an account or log in to access the scholarship application platform.",
      image: "avatar.png", // Replace with an actual image
    },
    {
      id: 2,
      title: "Step 2: Fill Personal Details",
      description:
        "Provide your personal information, such as name, contact number, and address.",
      image: "personal-data.png", // Replace with an actual image
    },
    {
      id: 3,
      title: "Step 3: Provide College Details",
      description:
        "Enter your college name, program of study, and other relevant academic details.",
      image: "college.png", // Replace with an actual image
    },
    {
      id: 4,
      title: "Step 4: Fill Application and Submit",
      description:
        "Complete the scholarship application form and submit it for review.",
      image: "paper.png", // Replace with an actual image
    },
  ];

  return (
    <div>
      <Navbar/>
    <div className="how-to-apply-container">
      <h1 className="page-title">How to Apply for a Scholarship</h1>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card-vertical">
            <img
              src={step.image}
              alt={step.title}
              className="step-image-vertical"
            />
            <div className="step-details-vertical">
              <h2 className="step-title">{step.title}</h2>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/signup">
          <button className="explore-button" role="button">Get Started Now</button>
        </Link>
    </div>
    </div>
  );
};

export default HowToApply;

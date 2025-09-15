import React, { useState } from "react";
import "./StudentForm.css"; // Add a CSS file for styling
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudentForm() {
    const savedEmail = localStorage.getItem("email");
    const savedPhone = localStorage.getItem("phone");
    
    const navigate=useNavigate();

    
    

    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: savedEmail || "",
        phoneNumber: savedPhone ||"",
        birthDate: null,
        gender: "",
        streetAddress: "",
        city: "",
        state: "",
        postalCode: "",
        secondaryContactName: "",
        secondaryContactPhone: "",
        secondaryContactRelation: "",
        schoolName: "",
        schoolCity: "",
        startDate: "",
        endDate: "",
        stateOfSchool: "",
        collegeName: "",
        studentId: "",
        course: "",
        isPursuing: "",
        passOutDate: null,
        collegeEmail:"",
        
        
      });

      const collegeEmailSuffixes = {
        "KLU": "@kluniversity.in",
        "IIT Madras": "@iitm.ac.in",
        "Anna University": "@annauniv.edu",
        "Delhi University": "@du.ac.in",
        // Add more colleges as needed
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        
        localStorage.setItem("firstname", formData.firstName);
        localStorage.setItem("collegename",formData.collegeName);
        localStorage.setItem("course",formData.course);
        localStorage.setItem("year",formData.passOutDate);
        localStorage.setItem("id",formData.studentId);

        



        axios.post("https://scholar-ship-backend-production.up.railway.app/applicantInfo/studentinfo",formData).then((res)=>{
            if(res.data === "info saved"){
                navigate('/student')
              }
              console.log("user info saved");
        }).catch((error) => {
            console.error("error during form submission:",error);
          });
        
      };
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

    
    const handleDateChange = (name, date) => {
        setFormData((prev) => ({ ...prev, [name]: date }));
      };
    
    
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    


    return (
        <div>
            <Navbar/>
        <div className="form-container">
            <h1>Step 1: Personal Info</h1>

            {step === 1 && (
                <div>
                    <h2>General Information</h2>
                    <form onSubmit={(e) => {
              e.preventDefault();
              nextStep();
            }}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" name="firstName" placeholder="FirstName"  required value={formData.firstName} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Middle Name</label>
                                <input type="text" placeholder="Middle Name" name="middleName" value={formData.middleName} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Last Name" required name="lastName" value={formData.lastName} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="example@example.com" required name="email" value={formData.email} disabled onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="10 digit number" required name="phoneNumber" value={formData.phoneNumber} disabled onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Birth Date</label>
                                <DatePicker required
                                selected={formData.birthDate}
                                onChange={(date)=>handleDateChange("birthDate",date)}
                                dateFormat="MM/dd/yyyy" // Format of the displayed date
                                placeholderText="Select your birth date"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select" // Allows dropdowns for month and year
                                className="date-picker-input" // Optional custom styling class
                                />
                            </div>
                            <div className="form-group">
                                <label>Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleChange} required>
                                    <option>Please Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="button-row">
                        <Link to ='/' ><button className="button2" type="button">cancle</button> </Link>
                        <button  className="button1" >Next</button>
                        
                        </div>
                    </form>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h2>Residence Information</h2>
                    <form onSubmit={(e) => {
            e.preventDefault();
            nextStep();}}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Street Address</label>
                                <input type="text" name="streetAddress" value={formData.streetAddress} placeholder="Street Address" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>State / Province</label>
                                <input type="text" placeholder="State / Province" name="state" value={formData.state} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Postal Code</label>
                                <input type="text" placeholder="Postal Code" name="postalCode" value={formData.postalCode} onChange={handleChange} required/>
                            </div>
                        </div> 
                        <div className="button-row">
                        <button  className="button2" onClick={prevStep}>Back</button>
                        <button  className="button1" >Next</button>
                        </div>
                       
                    </form>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h2>Contact Information</h2>
                    <form onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Secondary Contact Name</label>
                                <input type="text"required placeholder="Name" name="secondaryContactName" value={formData.secondaryContactName} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" required placeholder="10 digit number" pattern="[0-9]{10}" name="secondaryContactPhone" value={formData.secondaryContactPhone} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Relation</label>
                                <input type="text"required placeholder="Relationship" value={formData.secondaryContactRelation} name="secondaryContactRelation" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="button-row">
                        <button  className="button2" onClick={prevStep}>Back</button>
                        <button  className="button1"  >Next</button>
                        </div>
                        
                    </form>
                </div>
            )}
             {step === 4 && (
                <div onSubmit={handleSubmit}>
                    <h2>Enrollment History</h2>
                    <form onSubmit={(e) => {
              e.preventDefault();
              nextStep();
            }}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>School or college Name</label>
                                <input type="text" placeholder="Institute Name" name="schoolName" value={formData.schoolName} onChange={handleChange} required/>
                            </div>
                            <div className="form-group">
                                <label>city</label>
                                <input type="input" placeholder="place of institute" name="schoolCity" value={formData.schoolCity} onChange={handleChange} required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Date Started</label>
                                <DatePicker
                                name="date of 10th or 12th academic start year"
                                selected={formData.startDate}
                                
                                onChange={(date) => {
                                    setFormData((prev) => ({ ...prev, startDate: date }));
                                    if (formData.endDate && date > formData.endDate) {
                                      setFormData((prev) => ({ ...prev, endDate: date }));
                                    }
                                  }}
                                dateFormat="MM/dd/yyyy" // Format of the displayed date
                                placeholderText="date of 10th or 12th academic start year"
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select" // Allows dropdowns for month and year
                                className="date-picker-input" // Optional custom styling class
                                />
                            </div>
                            <div className="form-group" >
                                <label>Date Ended</label>
                                    <DatePicker
                                    name="date of 10th or 12th academic ended year"
                                    selected={formData.endDate}
                                    onChange={(date) => {
                                        if (!formData.startDate || date >= formData.startDate) {
                                          setFormData((prev) => ({ ...prev, endDate: date }));
                                        } else {
                                          alert("End date cannot be earlier than the start date.");
                                        }
                                      }}
                                    dateFormat="MM/dd/yyyy" // Format of the displayed date
                                    placeholderText="date of 10th or 12th academic ended year"
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select" // Allows dropdowns for month and year
                                    className="date-picker-input" // Optional custom styling class
                                    />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>State</label>
                                <select required><option name="schoolCity" value={formData.schoolCity} onChange={handleChange}>Select a state</option>
      <option value="AP">Andhra Pradesh</option>
      <option value="AR">Arunachal Pradesh</option>
      <option value="AS">Assam</option>
      <option value="BR">Bihar</option>
      <option value="CG">Chhattisgarh</option>
      <option value="GA">Goa</option>
      <option value="GJ">Gujarat</option>
      <option value="HR">Haryana</option>
      <option value="HP">Himachal Pradesh</option>
      <option value="JK">Jammu and Kashmir</option>
      <option value="JH">Jharkhand</option>
      <option value="KA">Karnataka</option>
      <option value="KL">Kerala</option>
      <option value="MP">Madhya Pradesh</option>
      <option value="MH">Maharashtra</option>
      <option value="MN">Manipur</option>
      <option value="ML">Meghalaya</option>
      <option value="MZ">Mizoram</option>
      <option value="NL">Nagaland</option>
      <option value="OD">Odisha</option>
      <option value="PB">Punjab</option>
      <option value="RJ">Rajasthan</option>
      <option value="SK">Sikkim</option>
      <option value="TN">Tamil Nadu</option>
      <option value="TS">Telangana</option>
      <option value="TR">Tripura</option>
      <option value="UP">Uttar Pradesh</option>
      <option value="UK">Uttarakhand</option>
      <option value="WB">West Bengal</option>
      <option value="AN">Andaman and Nicobar Islands</option>
      <option value="CH">Chandigarh</option>
      <option value="DN">Dadra and Nagar Haveli</option>
      <option value="DD">Daman and Diu</option>
      <option value="LD">Lakshadweep</option>
      <option value="DL">Delhi</option>
      <option value="PY">Puducherry</option></select>
                            </div>
                        </div>
                        <div className="button-row">
                        <button  className="button2" onClick={prevStep}>Back</button>
                        
                        <button  className="button1" onClick={nextStep} >next</button>
                       
                        </div>
                        
                    </form>
                </div>
            )}

{step === 5 && (
    <div>
        <h2>Present College Details</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <label>College Name</label>
                    <select
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={(e) => {
                            const selectedCollege = e.target.value;
                            const suffix = collegeEmailSuffixes[selectedCollege] || "";
                            setFormData((prev) => ({
                                ...prev,
                                collegeName: selectedCollege,
                                collegeEmail: prev.studentId
                                    ? `${prev.studentId}${suffix}`
                                    : suffix,
                            }));
                        }}
                        required
                    >
                        <option value="">Select College</option>
                        {Object.keys(collegeEmailSuffixes).map((college) => (
                            <option key={college} value={college}>
                                {college}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Student ID</label>
                    <input
                        type="text"
                        placeholder="Student ID"
                        name="studentId"
                        value={formData.studentId}
                        onChange={(e) => {
                            const studentId = e.target.value;
                            const suffix = collegeEmailSuffixes[formData.collegeName] || "";
                            setFormData((prev) => ({
                                ...prev,
                                studentId: studentId,
                                collegeEmail: studentId ? `${studentId}${suffix}` : "",
                            }));
                        }}
                        required
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>College Email</label>
                    <input
                        type="email"
                        name="collegeEmail"
                        value={formData.collegeEmail}
                        readOnly
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>Course</label>
                    <input
                        type="text"
                        placeholder="Course Name (e.g., B.Tech in CSE)"
                        name="course"
                        value={formData.course || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Are you currently pursuing this course?</label>
                    <select
                        name="isPursuing"
                        value={formData.isPursuing || ""}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>Pass-out Date</label>
                    <DatePicker
                        name="passOutDate"
                        selected={formData.passOutDate}
                        onChange={(date) => handleDateChange("passOutDate", date)}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Expected Pass-out Date"
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        className="date-picker-input"
                        required={!formData.isPursuing || formData.isPursuing === "no"} // Require if not pursuing
                    />
                </div>
            </div>
            <div className="button-row">
                <button className="button2" onClick={prevStep}>
                    Back
                </button>
                <button className="button1" type="submit">
                    Submit
                </button>
            </div>
        </form>
    </div>
)}


        


        </div>
        </div>
    );
}

export default StudentForm;

import React, { useState, useEffect } from "react";
import axios from "axios";

const ScholarshipForm = () => {
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [secondaryContactName, setSecondaryContactName] = useState("");
  const [secondaryContactPhone, setSecondaryContactPhone] = useState("");
  const [secondaryContactRelation, setSecondaryContactRelation] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [stateOfSchool, setStateOfSchool] = useState("");
  const [collageName, setCollageName] = useState("");
  const [course, setCourse] = useState("");
  const [ispursuing, setIspursuing] = useState("");
  const [passOutDate, setPassOutDate] = useState("");

  // Function to fetch applicant info by student ID (simulation)
  useEffect(() => {
    if (studentId) {
      console.log("Fetching data for studentId:", studentId);  // Debug log
      axios
        .get(`https://scholar-ship-backend-production.up.railway.app/applicantInfo/getApplicantByStudentId?studentId=${studentId}`)
        .then((response) => {
          console.log("Fetched Data:", response.data);  // Debug log
          setFirstName(response.data.firstName || "");
          setMiddleName(response.data.middleName || "");
          setLastName(response.data.lastName || "");
          setEmail(response.data.email || "");
          setPhoneNumber(response.data.phoneNumber || "");
          setBirthDate(response.data.birthDate || "");
          setGender(response.data.gender || "");
          setStreetAddress(response.data.streetAddress || "");
          setCity(response.data.city || "");
          setState(response.data.state || "");
          setPostalCode(response.data.postalCode || "");
          setSecondaryContactName(response.data.secondaryContactName || "");
          setSecondaryContactPhone(response.data.secondaryContactPhone || "");
          setSecondaryContactRelation(response.data.secondaryContactRelation || "");
          setSchoolName(response.data.schoolName || "");
          setSchoolCity(response.data.schoolCity || "");
          setStartDate(response.data.startDate || "");
          setEndDate(response.data.endDate || "");
          setStateOfSchool(response.data.stateOfSchool || "");
          setCollageName(response.data.collageName || "");
          setCourse(response.data.course || "");
          setIspursuing(response.data.ispursuing || "");
          setPassOutDate(response.data.passOutDate || "");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);  // Debug log
          alert("Failed to fetch data. Please check the backend and network.");
        });
    }
  }, [studentId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const applicantData = {
      studentId,
      firstName,
      middleName,
      lastName,
      email,
      phoneNumber,
      birthDate,
      gender,
      streetAddress,
      city,
      state,
      postalCode,
      secondaryContactName,
      secondaryContactPhone,
      secondaryContactRelation,
      schoolName,
      schoolCity,
      startDate,
      endDate,
      stateOfSchool,
      collageName,
      course,
      ispursuing,
      passOutDate,
    };

    
  };

  return (
    <div className="App-form">
      <h1>Scholar Application</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Student ID*</label>
          <input
            type="text"
            name="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter Student ID"
            required
          />
        </fieldset>

        <fieldset>
          <label>First Name*</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
        </fieldset>

        <fieldset>
          <label>Middle Name*</label>
          <input
            type="text"
            name="middleName"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
            placeholder="Middle Name"
            required
          />
        </fieldset>

        <fieldset>
          <label>Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
        </fieldset>

        <fieldset>
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </fieldset>

        <fieldset>
          <label>Phone Number*</label>
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            required
          />
        </fieldset>

        <fieldset>
          <label>Birth Date*</label>
          <input
            type="date"
            name="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </fieldset>

        <fieldset>
          <label>Gender*</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </fieldset>

        <fieldset>
          <label>Street Address*</label>
          <input
            type="text"
            name="streetAddress"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            placeholder="Street Address"
            required
          />
        </fieldset>

        <fieldset>
          <label>City*</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            required
          />
        </fieldset>

        <fieldset>
          <label>State*</label>
          <input
            type="text"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            required
          />
        </fieldset>

        <fieldset>
          <label>Postal Code*</label>
          <input
            type="text"
            name="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Postal Code"
            required
          />
        </fieldset>

        <fieldset>
          <label>School Name*</label>
          <input
            type="text"
            name="schoolName"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            placeholder="School Name"
            required
          />
        </fieldset>

        <fieldset>
          <label>School City*</label>
          <input
            type="text"
            name="schoolCity"
            value={schoolCity}
            onChange={(e) => setSchoolCity(e.target.value)}
            placeholder="School City"
            required
          />
        </fieldset>

        <fieldset>
          <label>Start Date*</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </fieldset>

        <fieldset>
          <label>End Date*</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </fieldset>

        <fieldset>
          <label>State of School*</label>
          <input
            type="text"
            name="stateOfSchool"
            value={stateOfSchool}
            onChange={(e) => setStateOfSchool(e.target.value)}
            placeholder="State of School"
            required
          />
        </fieldset>

        <fieldset>
          <label>College Name*</label>
          <input
            type="text"
            name="collageName"
            value={collageName}
            onChange={(e) => setCollageName(e.target.value)}
            placeholder="College Name"
            required
          />
        </fieldset>

        <fieldset>
          <label>Course*</label>
          <input
            type="text"
            name="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Course"
            required
          />
        </fieldset>

        <fieldset>
          <label>Is Pursuing*</label>
          <input
            type="text"
            name="ispursuing"
            value={ispursuing}
            onChange={(e) => setIspursuing(e.target.value)}
            placeholder="Is Pursuing"
            required
          />
        </fieldset>

        <fieldset>
          <label>Pass Out Date*</label>
          <input
            type="date"
            name="passOutDate"
            value={passOutDate}
            onChange={(e) => setPassOutDate(e.target.value)}
            required
          />
        </fieldset>

        <button className="appli-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ScholarshipForm;

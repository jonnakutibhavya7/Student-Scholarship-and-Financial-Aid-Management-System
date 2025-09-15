import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
  const navigate =useNavigate()
  const[username,setUsername] = useState()
  const[password,setPassword] = useState()
  const[email,setEmail] = useState()
  const[phone,setPhone] = useState()
  localStorage.setItem("email", email);
  localStorage.setItem("phone",phone);

  
  

   function handleSubmit(event)
  {
    event.preventDefault();
    axios.post("https://scholar-ship-backend-production.up.railway.app/user/signup",{
      username:username,
      password:password,
      email:email,
      phno:phone
    }).then((res)=>{
      if(res.data === "user added succefully"){
        navigate('/studentinfo')
      }
      console.log("user added")
    }).catch((error) => {
      console.error("error during signup:",error);
    });
  }

  return (
    <div>
      <Navbar/>
    <div className="signup-container">
      <h2 className="form-title">Create Your Account</h2>

      {/* Sign Up Form */}
      <form onSubmit={handleSubmit} action="POST" className="signup-form">
        <div className="input-wrapper ">
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            required
            onChange={(e)=>{setUsername(e.currentTarget.value)}}
          />
          <i className="material-symbols-rounded">person</i>
        </div>

        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email address"
            className="input-field"
            required
            onChange={(e)=>{setEmail(e.currentTarget.value)}}
          />
          <i className="material-symbols-rounded">mail</i>
        </div>

        <div className="input-wrapper">
          <input
            type="tel"
            placeholder="Phone number"
            pattern="[0-9]{10}"
            className="input-field"
            required
            onChange={(e)=>{setPhone(e.currentTarget.value)}}
          />
          <i className="material-symbols-rounded">phone</i>
        </div>

        <div className="input-wrapper">
          <input
            type={isPasswordShown ? "text" : "password"}
            placeholder="Password"
            className="input-field"
            required
            onChange={(e)=>{setPassword(e.currentTarget.value)}}
          />
          <i className="material-symbols-rounded">lock</i>
          <i
            onClick={() => setIsPasswordShown((prevState) => !prevState)}
            className="material-symbols-rounded eye-icon"
          >
            {isPasswordShown ? "visibility" : "visibility_off"}
          </i>
        </div>

        <div className="input-wrapper">
          <input
            type={isConfirmPasswordShown ? "text" : "password"}
            placeholder="Retype Password"
            className="input-field"
            required
          />
          <i className="material-symbols-rounded">lock</i>
          <i
            onClick={() =>
              setIsConfirmPasswordShown((prevState) => !prevState)
            }
            className="material-symbols-rounded eye-icon"
          >
            {isConfirmPasswordShown ? "visibility" : "visibility_off"}
          </i>
        </div>

        <button type="submit" className="signup-button" >
          Sign Up
        </button>
      </form>

      <p className="login-prompt">
         Already have an account? <a href="/login" className="login-link">Log in</a> 
      </p>
    </div>
    </div>
  );
};

export default SignUp;

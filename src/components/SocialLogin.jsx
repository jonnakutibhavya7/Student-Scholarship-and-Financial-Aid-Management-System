import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

// InputField Component
const InputField = ({ type, placeholder, icon, value, onChange }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? 'text' : type}
        placeholder={placeholder}
        className="input-field"
        required
        value={value}
        onChange={onChange}
      />
      <i className="material-symbols-rounded">{icon}</i>
      {type === 'password' && (
        <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-rounded eye-icon">
          {isPasswordShown ? 'visibility' : 'visibility_off'}
        </i>
      )}
    </div>
  );
};

// SocialLogin Component
const SocialLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate(); 
  const [errorMessage,setErrorMessage] = useState(""); 

  const handleLoginClick = (provider) => {
    if (provider === "google") {
      window.open("https://www.google.com", "_blank");
    } else if (provider === "apple") {
      alert("Apple login coming soon!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    console.log(email+ pass);
    axios.get(`https://scholar-ship-backend-production.up.railway.app/user/login/${email}/${pass}`)
      .then((res) => {
        if(res.data ==="Login successfull"){
          navigate("/student");
        }
        else{
          setErrorMessage(res.data );
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        alert("An error occurred during login.");
      });
  };

  return (
    <div>
      <Navbar/>
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>

      <div className="social-login">
        <button className="social-button" onClick={() => handleLoginClick("google")}>
          <img src="google.svg" alt="Google" className="social-icon" />
          Google
        </button>

        <button className="social-button" onClick={() => handleLoginClick("apple")}>
          <img src="apple.svg" alt="Apple" className="social-icon" />
          Apple
        </button>
      </div>

      <p className="separator"><span>or</span></p>

      {/* Form for Email and Password login */}
      <form onSubmit={handleSubmit} className="login-form">
        <InputField
          type="email"
          placeholder="Email address"
          icon="mail"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          icon="lock"
          value={pass}
          onChange={(e) => setPass(e.currentTarget.value)}
        />
        
        {errorMessage && <p style={{ color: "red", fontSize: "0.9rem", marginBottom: "10px ",marginTop: "5px", textAlign: "centre" }} className="error-message">{errorMessage}</p>}
        

        <a href="login" className="forgot-password-link">Forgot password?</a>
        <button type="submit" className="login-button">Log In</button>
      </form>

      <p className="signup-prompt">
        Don&apos;t have an account? <a href="/signup" className="signup-link">Sign up</a>
      </p>
    </div>
    </div>
  );
};

export default SocialLogin;

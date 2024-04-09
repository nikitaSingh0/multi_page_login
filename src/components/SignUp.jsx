import signUpImg from "../assets/signup.jpg";
import React, { useState } from "react";
import "./SignUp.css";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [userList, setUserList] = useState([]); // State to store the list of users

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if username or email already exists
    const existingUser = userList.find(
      (user) =>
        user.username === formData.username || user.email === formData.email
    );

    if (existingUser) {
      setError("Username or email already exists!");
    } else {
      // Save user data to userList state
      setUserList([...userList, formData]);
      // Reset form data
      setFormData({
        name: "",
        username: "",
        email: "",
        password: "",
      });
      // Clear error message
      setError("");
      // Perform other actions like API calls or navigation
      console.log("User created successfully:", formData);
    }
  };
  return (
    <div className="signup-container">
      <div className="hero-section">
        <img src={signUpImg} alt="" />
        <h1 className="img-heading">
          Discover the world's top Designers & Creatives.
        </h1>
        <div className="illustration">{/* Illustration goes here */}</div>
      </div>
      <div className="form-section">
        <h2>Sign up to Dribbble</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="eg: Joey Butler"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="eg: joey_butler"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="eg: joeybutler16@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="6+ characters"
              required
            />
          </div>
          <div className="form-group terms-group">
            <input
              type="checkbox"
              id="terms"
              required
              className="terms-checkbox"
            />
            <label htmlFor="terms" className="terms-label">
              Creating an account means you're okay with our{" "}
              <span className="terms-color">
                Terms of Service, Privacy Policy,
              </span>{" "}
              and our default{" "}
              <span className="terms-color">Notification Settings.</span>
            </label>
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="button-container">
            <button type="submit" className="btn-primary">
              Create Account
            </button>
          </div>
        </form>
        <p className="disclaimer text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="terms-color">Privacy Policy</span> and
          <span className="terms-color"> Terms of Service apply.</span>
        </p>
      </div>
    </div>
  );
}
export default SignUp;

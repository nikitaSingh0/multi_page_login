import React, { useState } from "react";
import signUpImg from "../../../src/assets/signup.jpg";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [userList, setUserList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var allUsers = JSON.parse(localStorage.getItem("all_users"));
    if (!allUsers) {
      allUsers = [];
    }
    console.log(allUsers);
    // Check if username or email already exists
    const existingUser = allUsers.find(
      (user) =>
        user.username === formData.username || user.email === formData.email
    );

    if (formData.password.length < 6) {
      setError("Minimum length of password is 6");
    } else if (existingUser) {
      setError("Username or email already exists!");
    } else {
      setUserList([...userList, formData]);

      setFormData({
        name: "",
        username: "",
        email: "",
        password: "",
      });
      setError("");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/profile");
      }, 1000);

      localStorage.setItem("user", JSON.stringify(formData));
      const allUsers = localStorage.getItem("all_users");
      const allUserList = allUsers ? JSON.parse(allUsers) : [];
      const newUserList = [...allUserList, formData];
      localStorage.setItem("all_users", JSON.stringify(newUserList));
      localStorage.setItem("user", JSON.stringify(formData));
    }
  };

  return (
    <div className="signup-container">
      <div className="hero-section">
        <img src={signUpImg} alt="" className="hero-img" />
        <div className="img-overlay">
          <h1 className="img-heading">
            Uncover Top Designers & Creative Talent.
          </h1>
        </div>
      </div>
      <div className="form-section">
        <div>
          <h2>Sign up to CreativEdge</h2>
          <form onSubmit={handleSubmit} className="form-start">
            <div className="form-group">
              <div className="my-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nikita Singh"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="nikita122"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nikita.s10@gmail.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="6+ characters"
                  required
                />
              </div>
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
          {showPopup && (
            <div className="popup">Account Created Successfully!</div>
          )}
          <p className="disclaimer text-center">
            This site is protected by reCAPTCHA and the Google{" "}
            <span className="terms-color">Privacy Policy</span> and
            <span className="terms-color"> Terms of Service apply.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

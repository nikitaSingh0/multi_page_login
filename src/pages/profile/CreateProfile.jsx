import React, { useState } from "react";
import "./CreateProfile.css";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [avatar, setAvatar] = useState(null);
  const name = useState(JSON.parse(localStorage.getItem("user")).name);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        localStorage.setItem("user_img", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelImage = () => {
    setAvatar(null);
    document.getElementById("avatarInput").value = "";
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleNextButtonClick = () => {
    navigate("/user-info");
  };

  return (
    <div className="profile-form-container">
      <div className="profile-form text-center">
        <h1 className="text-center mb-4">CreativEdge</h1>
        <h2 className="heading">Welcome {name}, Let's create your profile</h2>
        <p className="subheading">
          Let others get to know you better! You can do these later.
        </p>
        <div className="2">
          <div className="avatar-section">
            <label htmlFor="avatarInput" className="section-label">
              Add an avatar
            </label>
            <div className="d-flex justify-content-center">
              <div className="avatar-upload">
                <input
                  type="file"
                  id="avatarInput"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="upload-button"
                  hidden
                />
                {avatar && (
                  <div className="avatar-container">
                    <img src={avatar} alt="Avatar" className="avatar-preview" />
                    <button
                      className="cancel-button"
                      onClick={handleCancelImage}
                    >
                      &times;
                    </button>
                  </div>
                )}
                {!avatar && (
                  <label htmlFor="avatarInput" className="upload-label">
                    <span>Choose image</span>
                  </label>
                )}
              </div>
            </div>
          </div>
          <div className="location-section mt-5">
            <label htmlFor="locationInput" className="section-label">
              Add your location
            </label>
            <input
              type="text"
              id="locationInput"
              className="form-control"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter a location"
            />
          </div>
        </div>
        <button className="next-button" onClick={handleNextButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;

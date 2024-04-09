import React, { useState } from "react";
import "./CreateProfile.css";

const CreateProfile = () => {
  const [location, setLocation] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
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
    if (location.trim() !== "") {
      console.log("Address:", location);
      setLocation("");
    }
  };

  return (
    <div className="profile-form-container">
      <div className="profile-form">
        <h1 className="heading">Welcome! Let's create your profile</h1>
        <p className="subheading">
          Let others get to know you better! You can do these later
        </p>
        <div className="form-section">
          <div className="avatar-section">
            <label htmlFor="avatarInput" className="section-label">
              Add an avatar
            </label>
            <div className="avatar-upload">
              <input
                type="file"
                id="avatarInput"
                accept="image/*"
                onChange={handleImageUpload}
                className="upload-button"
              />
              {avatar && (
                <div className="avatar-container">
                  <img src={avatar} alt="Avatar" className="avatar-preview" />
                  <button className="cancel-button" onClick={handleCancelImage}>
                    <i className="fa fa-times" aria-hidden="true"></i>
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
          <div className="location-section">
            <label htmlFor="locationInput" className="section-label">
              Add your location
            </label>
            <input
              type="text"
              id="locationInput"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter a location"
              className="location-input"
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

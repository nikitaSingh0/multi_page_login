import React, { useState } from "react";
import "./UserInfo.css";
import image1 from "../../../src/assets/DES1.jpg";
import image2 from "../../../src/assets/DES2.jpg";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showError, setError] = useState(false);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const options = [
    { id: 1, label: "I'm a designer looking to share my work", img: image1 },
    { id: 2, label: "I'm looking to hire a designer", img: image2 },
    { id: 3, label: "I'm looking for design inspiration", img: image1 },
  ];

  const finishButtonClick = () => {
    console.log(selectedOptions.length);
    if (selectedOptions.length != 0) {
      setError(false);
      navigate("/verify-email");
    } else {
      setError(true);
    }
  };

  return (
    <div className="form-container">
      <div className="profile-form">
        <h2>What brings you to CreativEdge?</h2>
        <p>Select the options that best describe you.</p>
        <div className="options mt-2">
          {options.map((option) => (
            <div
              key={option.id}
              className={`option text-center ${
                selectedOptions.includes(option.label) ? "selected" : ""
              }`}
              onClick={() => handleOptionChange(option.label)}
            >
              <div className="img-container">
                <img src={option.img} alt="" />
              </div>
              <span>{option.label}</span>
              <div className="checkbox-container d-flex justify-content-center mt-2">
                <input
                  type="checkbox"
                  id={`checkbox-${option.id}`}
                  className="checkbox-input"
                  checked={selectedOptions.includes(option.label)}
                  onChange={() => handleOptionChange(option.label)}
                />
                <label
                  htmlFor={`checkbox-${option.id}`}
                  className={`checkbox-custom ${
                    selectedOptions.includes(option.label)
                      ? "selected-check"
                      : ""
                  }`}
                ></label>
              </div>
            </div>
          ))}
        </div>
        {showError && <div className="text-danger">*Select at least one!</div>}
        <div className="text-center">
          <button className="finish-btn" onClick={finishButtonClick}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

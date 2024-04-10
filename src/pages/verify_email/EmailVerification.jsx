import React, { useState } from "react";
import "./EmailVerification.css";

const EmailVerification = () => {
  const [resendClicked, setResendClicked] = useState(false);
  const [image, setImage] = useState(localStorage.getItem("user_img"));
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("user")).email
  );

  const handleResendClick = () => {
    setResendClicked(true);
  };

  return (
    <div className="email-verification">
      <div className="header">
        <div className="logo">CreativEdge</div>
        <nav className="mr-5 pr-5">
          <a href="#">Inspiration</a>
          <a href="#">Find Work</a>
          <a href="#">Learn Design</a>
          <a href="#">Go Pro</a>
          <a href="#">Hire Designers</a>
          <input type="text" placeholder="Search" />
          <img src={image} alt="User Image" className="user-image mr-5" />
        </nav>
      </div>
      <div className="content">
        <h1>Please verify your email...</h1>
        <div className="email-icon">✉️</div>
        <p>
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <p className="email-address">{email}</p>
        <p>
          Click the confirmation link in that email to begin using CreativEdge.
        </p>
        <p>
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{" "}
          <a className="links" href="#" onClick={handleResendClick}>
            resend the confirmation email
          </a>
          .
        </p>
        {resendClicked && (
          <p className="resend-message">Confirmation email resent!</p>
        )}
        <p>
          Wrong email address?{" "}
          <a className="links" href="#">
            Change it
          </a>
          .
        </p>
      </div>
      <footer>
        <div className="footer">
          <div className="row">
            <div className="col-12 col-sm-4 mb-4">
              <div>
                <h3>For designers</h3>
                <div className="extra-links">
                  <div>
                    <a href="#">Go Pro!</a>
                  </div>
                  <div>
                    <a href="#">Explore design work</a>
                  </div>
                  <div>
                    <a href="#">Design blog</a>
                  </div>
                  <div>
                    <a href="#">Overtime podcast</a>
                  </div>
                  <div>
                    <a href="#">Playoffs</a>
                  </div>
                  <div>
                    <a href="#">Weekly Warm-Up</a>
                  </div>
                  <div>
                    <a href="#">Refer a Friend</a>
                  </div>
                  <div>
                    <a href="#">Code of conduct</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-4">
              <div>
                <h3>Hire designers</h3>
                <div className="extra-links">
                  <div>
                    <a href="#">Post a job opening</a>
                  </div>
                  <div>
                    <a href="#">Post a freelance project</a>
                  </div>
                  <div>
                    <a href="#">Search for designers</a>
                  </div>
                  <div>
                    <a href="#">Brands</a>
                  </div>
                  <div>
                    <a href="#">Advertise with us</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-4">
              <div>
                <h3>Company</h3>
                <div className="extra-links">
                  <div>
                    <a href="#">About</a>
                  </div>
                  <div>
                    <a href="#">Careers</a>
                  </div>
                  <div>
                    <a href="#">Support</a>
                  </div>
                  <div>
                    <a href="#">Media kit</a>
                  </div>
                  <div>
                    <a href="#">Testimonials</a>
                  </div>
                  <div>
                    <a href="#">API</a>
                  </div>
                  <div>
                    <a href="#">Terms of service</a>
                  </div>
                  <div>
                    <a href="#">Privacy policy</a>
                  </div>
                  <div>
                    <a href="#">Cookie policy</a>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <p className="copyright">
          &copy; 2023 CreativEdge. All rights reserved.
        </p>
        <p className="shot-count">20,501,853 shots CreativEdge</p>
      </footer>
    </div>
  );
};

export default EmailVerification;

import React from "react";
import "./VerifyEmail.css";
import { Link } from "react-router-dom";
const VerifyEmail = () => {
  return (
    <div className="row1">
      <h1>Email Verify</h1>
      <h6 className="information-text">
        Enter your  email to verify
      </h6>
      <div className="form-group">
        <input type="email" name="user_email" id="user_email" />
        <p>
          <label for="username">Email</label>
        </p>
        <button onclick="showSpinner()">Verify</button>
      </div>
    </div>
  );
};

export default VerifyEmail;

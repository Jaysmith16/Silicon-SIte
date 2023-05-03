import React from "react";
import "./forgotPassword.css";
import { Link } from "react-router-dom";
const ForgotPasswordPage = () => {
  return (
    <div className="row1">
      <h1>Forgot Password</h1>
      <h6 className="information-text">
        Enter your registered email to reset your password.
      </h6>
      <div className="form-group">
        <input type="email" name="user_email" id="user_email" />
        <p>
          <label for="username">Email</label>
        </p>
        <button onclick="showSpinner()">Reset Password</button>
      </div>
      <div className="footer">
        <h5>
          New here? <Link to="/signup">Signup</Link>
        </h5>
        <h5>
          Already have an account? <Link to="/login">Login</Link>
        </h5>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

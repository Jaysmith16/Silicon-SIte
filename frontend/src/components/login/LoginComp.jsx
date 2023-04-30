import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/userAuthapi";
import { getToken, storeToken } from "../../services/LocalStorage";
import { setUserToken } from "../../features/authSlice";
import { useDispatch } from "react-redux";
function LoginComp() {
  const [login_data, setLoginData] = useState({ email: "", password: "" });
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const response = await loginUser(login_data);
    console.log(response);
    if (response.error) {
      console.log(response.error.data.errors);
    }

    if (response.data) {
      console.log(response.data);
      storeToken(response.data.token);
      let { access_token } = getToken();
      dispatch(setUserToken({ access_token: access_token }));
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2000);
    }
  };

  return (
    <>
      <div className="card mt-4 login-card">
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1" className="label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={login_data.email}
                onChange={(e) => {
                  setLoginData({ ...login_data, email: e.target.value });
                }}
              />
            </div>
            <div className="form-group mt-1">
              <label for="exampleInputPassword1" className="label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={login_data.password}
                onChange={(e) => {
                  setLoginData({ ...login_data, password: e.target.value });
                }}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary-submit">
              Login
            </button>
          </form>
        </div>
        <div className="card-footer-sec">
          <div className="d-flex justify-content-center links">
            Don't have an account?<Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComp;

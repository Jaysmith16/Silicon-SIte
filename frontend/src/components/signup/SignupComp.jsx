import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../services/userAuthapi";
function SignupComp() {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [register_data, setRegisterData] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
    tc: false,
  });
  console.log(register_data);
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(register_data.password);
    const res = await registerUser(register_data);
    console.log(res);
    if (res.error) {
      console.log(res.error.data.errors.email);
    }
    if (res.data) {
      console.log(res.data);
    }
  };

  return (
    <>
      <div className="card mt-4 login-card">
        <div className="card-body">
          <h5 className="card-title">Signup</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1" className="label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
                value={register_data.name}
                onChange={(e) =>
                  setRegisterData({ ...register_data, name: e.target.value })
                }
              />
            </div>
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
                value={register_data.email}
                onChange={(e) =>
                  setRegisterData({ ...register_data, email: e.target.value })
                }
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
                value={register_data.password}
                onChange={(e) =>
                  setRegisterData({
                    ...register_data,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group mt-1">
              <label for="exampleInputPassword1" className="label">
                {" "}
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={register_data.password2}
                onChange={(e) =>
                  setRegisterData({
                    ...register_data,
                    password2: e.target.value,
                  })
                }
              />
            </div>
            <label>
              <input
                type="checkbox"
                checked={register_data.tc}
                onChange={(e) =>
                  setRegisterData({
                    ...register_data,
                    tc: e.target.checked,
                  })
                }
              />
              <span className="ml-2 text-secondary">
                I agree to the terms and conditions
              </span>
            </label>
            <br />

            <button type="submit" className="btn btn-primary-submit">
              Signup
            </button>
          </form>
        </div>

        <div className="card-footer-sec">
          <div className="d-flex justify-content-center links">
            Have an account?<Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupComp;

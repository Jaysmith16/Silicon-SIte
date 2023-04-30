import React, { useEffect } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../../services/LocalStorage";
import { useGetLoggedUserQuery } from "../../services/userAuthapi";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo, unSetUserInfo } from "../../features/userSlice";
import { unSetUserToken } from "../../features/authSlice";
function NavbarComp() {
  const { access_token } = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.user_info);

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(
        setUserInfo({
          id: data.id,
          email: data.email,
          name: data.name,
          contact_number: data.contact_number,
          game_ids: data.game_ids,
          role_type: data.role_type,
        })
      );
    } else {
      dispatch(
        setUserInfo({
          id: "",
          name: "",
          email: "",
          contact_number: "",
          game_ids: {},
          role_type: "BASIC",
        })
      );
    }
  }, [isSuccess, data, dispatch]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    dispatch(
      unSetUserInfo({
        name: "",
        email: "",
        contact_number: "",
        game_ids: {},
        role_type: "BASIC",
      })
    );
    dispatch(unSetUserToken({ access_token: null }));
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container mt-4">
          <Link className="navbar-brand" to="/">
            <img
              src="https://silicon.ac.in/wp-content/themes/sit/assets/img/sit-logo.svg"
              alt="Silicon Logo"
              width="100"
              height="100"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto navbar-1st">
              <li className="nav-item upper-nav">
                <Link
                  className="nav-link"
                  aria-current="page"
                  href="https://silicon.ac.in/about-us/"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item upper-nav">
                <Link
                  className="nav-link"
                  href="https://silicon.ac.in/silicon-home/"
                >
                  Silicon Home Page
                </Link>
              </li>
              {userdata.name ? (
                <li className="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userdata.name}
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-light"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <Link class="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>

                    <li>
                      <div class="dropdown-item" onClick={handleLogout}>
                        LogOut
                      </div>
                    </li>
                  </ul>
                </li>
              ) : (
                // <li class=" font-medium group inline-block relative text-secondary hover:text-white cursor-pointer ">
                //   <Link to="/">{userdata.name}</Link>
                //   <ul class="absolute hidden text-secondary pt-1 group-hover:block">
                //     <li class="">
                //       <Link
                //         className=" text-left hover:text-white py-2 block whitespace-no-wrap"
                //         to="/profile"
                //       >
                //         Profile
                //       </Link>
                //     </li>

                //     <li class="">
                //   <div
                //     class=" hover:text-white py-2  block whitespace-no-wrap"
                //     onClick={handleLogout}
                //   >
                //     LogOut
                //   </div>
                //     </li>
                //   </ul>
                // </li>
                <li className="nav-item upper-nav">
                  <Link className="nav-link" to="/login">
                    Login / SignUp
                  </Link>
                </li>
              )}
            </ul>

            <form className="d-flex searchbar">
              <input
                className="form-control me-2 search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn  search-btn" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg ">
        <div className="container mb-4">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto navbar-2nd">
              <li className="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Maintaince
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-light"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link class="dropdown-item" to="/branch">
                      Branch Maintaince
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/sem">
                      Subject Maintaince
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/faculty">
                      Faculty Maintaince
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/allocation">
                  Allocation
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Report
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComp;

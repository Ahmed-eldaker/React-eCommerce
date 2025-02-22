import { Link, useLocation } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const LocalStorageName = localStorage.getItem("userName");
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm fixed-top">
      <div className="container">
        <div style={{ width: "35%" }}>
          <Link className="navbar-brand" to="/home">
            <img src="images/logo.webp" alt="" style={{ width: "100px" }} />
          </Link>
        </div>

        <button
          className="navbar-toggler "
          type="button"
          onClick={handleToggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-between ${
            navbarOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {[
              { to: "/home", label: "Home" },
              { to: "/home", label: "Brands" },
              { to: "/home", label: "Products" },
              { to: "/home", label: "Wishlist" },
              { to: "/home", label: "Cart" },
            ].map((link) => (
              <li
                key={link.to}
                className={`nav-item  ps-2`}
                onClick={handleToggleNavbar}
              >
                <Link className="nav-link" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-end ">
            {LocalStorageName ? (
              <div className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle  d-flex align-items-center"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Avatar
                    alt="avatar"
                    src="images/Image (2).png"
                    sx={{ marginX: "3px" }}
                  />
                  {LocalStorageName}
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      <Link to="/home" className="text-dark">
                        Logout
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <ul className="d-flex d-flex align-items-center  mb-lg-0 text-muted">
                  <li
                    className={`nav-item ${
                      location.pathname === "/login" ? "active" : ""
                    }`}
                    onClick={handleToggleNavbar}
                  >
                    <Link className="nav-link me-3" to="/home">
                      Login
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      location.pathname === "/register" ? "active" : ""
                    }`}
                    onClick={handleToggleNavbar}
                  >
                    <Link className="nav-link" to="/home">
                      Register
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top "
      style={{ background: "#fff" }}
    >
      <div class="container p-2 ">
        <Link class="navbar-brand" to="/">
          <img src="media/logo.svg" alt="Logo" style={{ width: "25%" }} />
        </Link>
        <div
          class=" navbar-content collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav  mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/signup">
                SignUp
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active" to="/products">
                Product
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-icon active">
                <i class="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

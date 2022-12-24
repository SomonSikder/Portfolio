import React from "react";
import "../style/style.css";
import profile from "../asset/images/profile-picture.png";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Header = () => {
  return (
    <div className="common-bg">
      <header className="flex flex-col justify-center items-center relative my-8">
        <img
          className="absolute -top-2/4 w-2/4 rounded-full border-4 border-teal-300"
          src={profile}
          alt="img-some"
        />

        <nav className="w-full text-center mt-8 common-bg">
          <ul>
            <li className="my-5">
              <NavLink
                to={"/about"}
                className={(navClass) => (navClass.isActive ? "active" : "")}
              >
                About Me
              </NavLink>
            </li>
            <li className="my-5">
              <NavLink
                to={"/project"}
                className={(navClass) => (navClass.isActive ? "active" : "")}
              >
                Project
              </NavLink>
            </li>
            <li className="my-5">
              <NavLink
                to={"/skills"}
                className={(navClass) => (navClass.isActive ? "active" : "")}
              >
                Skills
              </NavLink>
            </li>
            <li className="my-5">
              <NavLink
                to={"/contact"}
                className={(navClass) => (navClass.isActive ? "active" : "")}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div class="text-center common-bg">
        <h4 class="common-bg">Find Me</h4>
        <div class="flex justify-center items-center gap-5">
          <a
            className="text-3xl transition duration-200 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SomonSikder"
          >
            <i class="ri-github-fill"></i>
          </a>
          <a
            className="text-3xl transition duration-200 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110"
            href="https://www.linkedin.com/in/mohammad-somon-sikder-526984135/"
            rel="noreferrer"
          >
            <i
              style={{ color: "#06359c" }}
              class="ri-linkedin-line font-extrabold"
            ></i>
          </a>

          <a
            className="text-3xl transition duration-200 ease-in-out delay-100 hover:-translate-y-1 hover:scale-110"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100008897910989"
          >
            <i class="ri-facebook-fill" style={{ color: "#06359c" }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-evenly sm:items-center items-start  mt-25 bg-gray-50 px-8 py-14">
        <div className="text-3xl sm:text-4xl mb-10 sm:mb-0">
          <l className="bg-blue-400 font-bold p-1.5 pt-2 rounded-3xl ">
            Study
            <b className="bg-black ml-0.5 px-2 text-white rounded-3xl">OU</b>
          </l>
          <p className="text-lg sm:text-xl mt-3 text-gray-600">
            Thanks for visiting here !
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <p className="text-xl text-gray-500">Navigation -</p>
            <li>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-900 text-base sm:text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <NavLink
                to="/studyMaterials"
                className="text-gray-500 hover:text-gray-900 text-base sm:text-lg"
              >
                Study Material
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-500 hover:text-gray-900 text-base sm:text-lg"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-500 hover:text-gray-900 text-base sm:text-lg"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="mb-10 sm:mb-0 text-lg">
          <ul className="flex flex-col gap-3">
            <p className="text-xl text-gray-500">Contact -</p>
            <li className="text-gray-500 hover:text-gray-900 flex items-center gap-2">
              <FaGithub />{" "}
              <a href="https://github.com/MohammedMujtaba-dev/">GitHub</a>
            </li>
            <li className="text-gray-500 hover:text-gray-900 flex items-center gap-2">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/mohammed-mujtaba-99361729a/">
                Linkedin
              </a>
            </li>
            <li className="text-gray-500 hover:text-gray-900 flex items-center gap-2">
              <MdEmail />
              <a href="mailto:mohdmujtabawork706@gmail.com">Mail</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 text-center py-4 border-t border-gray-200 text-sm text-gray-500">
        © {new Date().getFullYear()} StudyOU. All rights reserved.
      </div>
    </>
  );
};

export default Footer;

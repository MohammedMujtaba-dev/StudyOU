import React from "react";
import { Link, NavLink } from "react-router-dom";

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

        <div className="mb-10 sm:mb-0">
          <ul className="flex flex-col gap-3">
            <p className="text-xl text-gray-500">Content -</p>
            <li className="text-gray-500 hover:text-gray-900">
              Question Papers
            </li>
            <li className="text-gray-500 hover:text-gray-900">
              Study Materials
            </li>
            <li className="text-gray-500 hover:text-gray-900">
              AI Generated Answers
            </li>
            <li className="text-gray-500 hover:text-gray-900">
              Final year Projects
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <p className="text-xl text-gray-500">Navigation -</p>
            <li>
              <a
                href="#nav"
                className="text-gray-500 hover:text-gray-900 text-base sm:text-lg"
              >
                Home
              </a>
            </li>
            <li>
              <NavLink
                to="/notes"
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
      </div>
      <div className="bg-gray-100 text-center py-4 border-t border-gray-200 text-sm text-gray-500">
        © {new Date().getFullYear()} StudyOU. All rights reserved.
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Sitecontain = () => {
  return (
    <>
      <div className="sm:mt-30  mt-54 ">
        <div className="flex items-center justify-center gap-5">
          <hr className="w-1/18 " />
          <h1 className="sm:text-4xl text-3xl text-gray-600">
            Site <b className="text-gray-900">Contain</b>
          </h1>
          <hr className="w-1/18 " />
        </div>
        <div className="flex flex-col md:flex-row gap-10 sm:mt-20 mt-15 ">
          <img
            src={assets.bg2_img}
            alt=""
            className="shadow-lg shadow-gray-500  rounded-2xl overflow-hidden flex-1"
          />
          <div className="flex flex-1 flex-col px-5 gap-4 sm:gap-5  sm:text-xl  text-base ">
            <ul className="list-disc gap-5 flex flex-col">
              <p className="text-center  text-2xl sm:text-3xl mb-2 text-gray-500">
                Site Content Includes:
              </p>
              <li>
                {/*📚*/} Syllabus for All 6 Semesters (As per Osmania
                University)
              </li>
              <li>{/*📝*/} Study Material of All Subjects (Semester-wise)</li>
              <li>{/*📄*/} Previous Years’ Question Papers </li>
              <li>{/*🖋️*/} Important Questions, Exam Tips</li>
              <li>
                {/*💻*/} Mini Project Samples with Source Code (for 5th & 6th
                Semester Projects)
              </li>
            </ul>
            {/* <p>🎓 Job/Internship Opportunities for BCA Students</p> */}
          </div>
        </div>

        <hr className="sm:bg-gray-800  my-15" />
        <div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex flex-col px-5 gap-3 sm:gap-5 flex-1 sm:text-xl text-base md:items-end items-center ">
              <p className="text-center  text-2xl sm:text-3xl mb-2 text-gray-500">
                Previous Year Papers Section Includes:
              </p>
              <Link
                to="/studyMaterials"
                className="text-gray-400 hover:text-gray-800 cursor-pointer"
              >
                📌 1st Semester – All Subjects
              </Link>
              <Link
                to="/studyMaterials"
                className="text-gray-400 hover:text-gray-800 cursor-pointer"
              >
                📌 2nd Semester – All Subjects
              </Link>
              <Link
                to="/studyMaterials"
                className="text-gray-400 hover:text-gray-800 cursor-pointer"
              >
                📌 3rd Semester – All Subjects
              </Link>
              <Link
                to="/studyMaterials"
                className="text-gray-400 hover:text-gray-800 cursor-pointer"
              >
                📌 4th Semester – All Subjects
              </Link>
              <Link
                to="/studyMaterials"
                className="text-gray-400 hover:text-gray-800 cursor-pointer"
              >
                📌 5th Semester – All Subjects
              </Link>
              <Link
                to="/studyMaterials"
                className="text-gray-400 hover:text-gray-800 cursor-pointer"
              >
                📌 6th Semester – All Subjects
              </Link>
            </div>
            <img
              src={assets.bg3_img}
              alt=""
              className="shadow-lg shadow-gray-500  rounded-2xl overflow-hidden flex-1"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-25 justify-center text-center ">
          <div className="w-full text-center bg-gray-500 rounded-lg  text-white px-4 py-3">
            <p className="text-md sm:text-xl">
              NOTE : Currently, Mathematics study material is available only for
              select semesters.
            </p>
          </div>
          <div className="bg-amber-500 text-white px-5 text-center py-4 w-full rounded-lg">
            <p className="text-lg sm:text-xl flex flex-col gap-2">
              <b>
                BCA students can contact us via the Contact Form for help with:
              </b>

              <p className="text-base sm:text-lg"> Project Development</p>
              <p className="text-base sm:text-lg"> Practical Assignments </p>
              <p className="text-base sm:text-lg"> Mini Project Ideas</p>
            </p>
          </div>
        </div>
        <div className="mt-20 px-4">
          <h1 className="text-2xl text-center font-semibold text-gray-700">
            Newsletter
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Subscribe to get latest updates on BCA notes, question papers, and
            projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-4">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full sm:w-1/3 px-4 py-3 border border-gray-400 rounded-xl outline-none"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitecontain;

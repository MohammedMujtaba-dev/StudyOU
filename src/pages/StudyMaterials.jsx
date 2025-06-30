import React from "react";
import { assets } from "../assets/assets";

const StudyMaterials = () => {
  return (
    <div className="mt-16 px-4 sm:px-10">
      {/* Section Title */}
      <div className="flex items-center gap-3 sm:gap-3 justify-center mb-10">
        <div className="w-8 sm:w-16 h-[1.5px] bg-gray-400" />
        <h1 className="text-xl sm:text-3xl font-bold text-gray-600">
          STUDY <span className="text-black">MATERIAL</span>
        </h1>
        <p className="w-8 sm:w-16 h-[1.5px] bg-gray-600"></p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 w-full sm:w-8/10 bg-white">
          <input
            type="search"
            placeholder="Search notes..."
            className=" outline-none px-2 text-sm sm:text-base w-full "
          />
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-5 h-5 cursor-pointer "
          />
        </div>
        <div className="flex sm:flex-row gap-2 sm:gap-3">
          <select className="bg-gray-100 py-2 outline-0 px-2 sm:px-4 rounded-xl border border-gray-300 text-sm sm:text-base">
            <option value="">Material</option>
            <option value="">Question paper</option>
          </select>
          <select className="bg-gray-100 py-2 outline-0 px-2 sm:px-4 rounded-xl border border-gray-300 text-sm sm:text-base">
            <option value="">Semester 1</option>
            <option value="">Semester 2</option>
            <option value="">Semester 3</option>
            <option value="">Semester 4</option>
            <option value="">Semester 5</option>
            <option value="">Semester 6</option>
          </select>
        </div>
      </div>
      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div
            key={item}
            className="border border-gray-300  p-5 rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={assets.bg1_img}
              alt=""
              className="rounded-xl overflow-hidden mb-5 h-[220px] md:h-[250px]"
            />
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
              📘 DSA Notes
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Complete unit-wise notes for Semester 2. Includes topics like
              Arrays, Linked List, Trees, etc.
            </p>
            <div className="flex gap-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base px-4 py-1.5 rounded-full">
                <a href={assets.Months} target="_blank">
                  View
                </a>
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base px-4 py-1.5 rounded-full">
                <a href={assets.Months} download>
                  Download
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterials;

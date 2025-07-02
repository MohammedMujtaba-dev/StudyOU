import React from "react";

const Card = ({ name, img, pdfLink, semester, type, description }) => {
  return (
    <div className="border border-gray-300  p-5 rounded-xl shadow hover:shadow-lg transition-shadow">
      <img
        src={img}
        alt=""
        className="rounded-xl overflow-hidden mb-5 h-[220px] md:h-[250px] w-full"
      />
      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
        📘 {name}
      </h2>

      <p className="text-sm sm:text-base text-gray-600 mb-2 font-bold">
        Semester : {semester} , {type}
      </p>
      <p className="text-sm sm:text-base text-gray-600 mb-4">{description}</p>
      <div className="flex gap-3">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base px-4 py-1.5 rounded-full">
          <a href={pdfLink} target="_blank">
            View
          </a>
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base px-4 py-1.5 rounded-full">
          <a href={pdfLink} download>
            Download
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;

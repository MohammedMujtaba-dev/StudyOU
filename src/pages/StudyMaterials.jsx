import React, { useEffect, useState } from "react";
import { assets, Material } from "../assets/assets";
import Card from "./Card.jsx";

const StudyMaterials = () => {
  const [products, setProducts] = useState([]);
  const [sem, setSem] = useState("All");
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");
  useEffect(() => {
    setProducts(Material);
  }, []);

  const filterProducts = products.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesSem = sem === "All" || item.semester === sem;
    const matchesType = type === "All" || item.type === type;
    return matchesSem && matchesType && matchSearch;
  });

  return (
    <div className="mt-10 sm:mt-14 px-4 sm:px-10">
      {/* Section Title */}
      <div className="flex items-center gap-3 sm:gap-3 justify-center mb-10">
        <div className="w-8 sm:w-16 h-[1.5px] bg-gray-400" />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-600">
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
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-5 h-5 cursor-pointer "
          />
        </div>
        <div className="flex sm:flex-row gap-2 sm:gap-3">
          <select
            className="bg-gray-100 py-2 outline-0 px-2 sm:px-4 rounded-xl border border-gray-300 text-sm sm:text-base"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="All">All types</option>
            <option value="Material">Material</option>
            <option value="Question paper">Question Paper</option>
          </select>
          <select
            className="bg-gray-100 py-2 outline-0 px-2 sm:px-4 rounded-xl border border-gray-300 text-sm sm:text-base"
            onChange={(e) => {
              setSem(e.target.value);
            }}
          >
            <option value="All">All Semesters</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
          </select>
        </div>
      </div>
      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterProducts.map((items, index) => (
          <Card
            key={index}
            name={items.name}
            img={items.img}
            pdfLink={items.pdfLink}
            semester={items.semester}
            type={items.type}
            description={items.description}
          />
        ))}
      </div>
    </div>
  );
};

export default StudyMaterials;

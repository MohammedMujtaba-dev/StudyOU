import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[600px] border rounded">
        <img
          className="w-full h-full object-cover absolute "
          // src="https://www.usnews.com/dims4/USNEWS/cd47aff/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F6e%2F8d%2Facd3c7d947b59d0f30982fc53bec%2F7-bizzell-library-summer-ou-flag-lamppost-cropped.png"
          // src="https://sceneloc8.com/wp-content/uploads/2024/03/Osmania-University-5.png"
          src="https://sceneloc8.com/wp-content/uploads/2024/03/Osmania-University-4.png"
          alt="StudyOU Banner"
        />
        <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to{" "}
            <l className="bg-blue-400 p-1.5 pt-2  rounded-3xl sm:z-20 z-0">
              Study
              <b className="bg-black ml-1 px-1  text-white  rounded-3xl">OU</b>
            </l>
          </h1>
        </div>
      </div>
      <div className="flex justify-center bg-transparent">
        <p className="absolute top-160 border-2 border-gray-400 shadow-md  shadow-gray-300  text-base md:text-lg w-3/4 md:w-2xl bg-gray-50 opacity-90 text-gray-700 rounded-xl p-3 px-5">
          StudyOU is the place where you can find all the essential study
          materials for the BCA (Bachelor of Computer Applications) course under
          Osmania University. All materials are carefully curated according to
          the official university syllabus.
        </p>
      </div>
    </>
  );
};

export default Hero;

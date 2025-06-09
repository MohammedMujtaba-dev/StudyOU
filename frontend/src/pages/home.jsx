import React from "react";

const home = () => {
  return (
    <div className="relative w-full h-[650px] ">
      <img
        className="w-full h-full object-cover absolute "
        // src="https://www.usnews.com/dims4/USNEWS/cd47aff/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F6e%2F8d%2Facd3c7d947b59d0f30982fc53bec%2F7-bizzell-library-summer-ou-flag-lamppost-cropped.png"
        // src="https://sceneloc8.com/wp-content/uploads/2024/03/Osmania-University-5.png"
        src="https://sceneloc8.com/wp-content/uploads/2024/03/Osmania-University-4.png"
        alt="StudyOU Banner"
      />
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to StudyOU
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Your one-stop solution for BCA, B.Com, B.Sc, and other OU course
          materials. Get access to semester-wise notes, previous year papers,
          assignments, and more — all in one place.
        </p>
      </div>
    </div>
  );
};

export default home;

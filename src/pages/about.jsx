import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-600 mb-2">
            About <b className="text-gray-800">Me</b>
          </h1>
          <p className="text-gray-500">Built by a student, for students 🎓</p>
        </div>

        <section className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Hey, I'm Mohammed Mujtaba
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I’m a BCA student who knows exactly how stressful and confusing
            college life can be — assignments, exams, practicals, and trying to
            find proper study material all at once. That’s why I built{" "}
            <strong>StudyOU</strong> — a simple, platform to help fellow BCA
            students like you save time and study smarter.
          </p>
        </section>

        <section className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            My mission is to make BCA resources more accessible and reliable —
            notes, previous year papers, important questions, mini projects, and
            more — all in one place, without distractions.
          </p>
        </section>

        <section className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Why I Built This
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I struggled to find good notes and real project ideas during my
            semesters. Most websites were either outdated, full of ads, or just
            plain unhelpful. So I decided to create my own — organized, simple,
            and always improving.
          </p>
        </section>

        <section className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            What You’ll Find Here
          </h2>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
            <li>Semester-wise notes and study materials</li>
            <li>Previous year question papers</li>
            <li>Project ideas and source codes</li>
          </ul>
        </section>

        <section className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            I hope to grow StudyOU into a go-to resource hub for BCA students
            across different universities, constantly updated with
            community-contributed content.
          </p>
        </section>

        <section className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            A Personal Note
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This project is something I’ve built in my free time. I’m learning
            as I go — coding, designing, and managing everything solo. If you
            find it helpful, share it with friends. Your support means a lot 💜
          </p>
        </section>

        <div className="text-center mt-10">
          <p className="text-gray-700 mb-4">
            Want to contribute, share feedback, or just say hi?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const Contact = () => {
  return (
    <div className="bg-none sm:bg-gray-50 min-h-screen pt-12">
      <div className="max-w-md mx-auto space-y-10 bg-white shadow-md p-6 sm:p-12 rounded-lg">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2">
            Contact <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-gray-500 text-sm">
            Got feedback or questions? I’d love to hear from you.
          </p>
        </div>

        <form
          action="https://formsubmit.co/mohdmujtabawork706@gmail.com"
          method="POST"
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="border border-gray-300 px-4 py-3 rounded-md outline-none "
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="border border-gray-300 px-4 py-3 rounded-md outline-none "
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message or feedback"
            required
            className="border border-gray-300 px-4 py-3 rounded-md outline-none "
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

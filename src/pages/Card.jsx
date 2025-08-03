import { toast } from "react-toastify";

const Card = ({ name, img, pdfLink, semester, type, description }) => {
  const handleAccess = (action) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login to access this content.");
      return;
    }

    if (action === "view") {
      window.open(pdfLink, "_blank");
    } else if (action === "download") {
      const link = document.createElement("a");
      link.href = pdfLink;
      link.download = `${name}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

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
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base px-4 py-1.5 rounded-full"
          onClick={() => handleAccess("view")}
        >
          View
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base px-4 py-1.5 rounded-full"
          onClick={() => handleAccess("download")}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Card;

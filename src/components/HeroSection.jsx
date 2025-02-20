import React from "react";
import CourseSection from "./CourseSection";
import ResultLog from "./ResultLog";

function HeroSection({ isRightSidebarOpen }) {
  const courses = [
    { title: "Soft Skills", progress: "75%" },
    { title: "Aptitude", progress: "50%" },
    { title: "Technical", progress: "95%" },
  ];

  const results = [
    { title: "Module Progress", progress: "10%" },
    { title: "Assignment", progress: "10%" },
    { title: "Assignment", progress: "10%" },
    { title: "Feedback Given", progress: "60%" },
  ];

  return (
    <div
      className={`relative min-h-screen ${
        isRightSidebarOpen ? "w-[calc(100%-320px)]" : "w-full"
      }`}
    >
      {/* Background element */}
      <div className="absolute inset-0 bg-[#D4EBF8] transition-all duration-300"></div>

      {/* Content container */}
      <div className="relative p-8">
        {/* Industry Readiness Program Section */}
        <div className="bg-blue-200 border-2 border-blue-200 rounded-lg p-6 shadow-md flex justify-between items-center w-full max-w-3xl h-[310px] relative">
          <div>
            <h2 className="text-4xl font-serif text-gray-800">
              Industry Readiness <br /> Program
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle
                  className="text-gray-300"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="transparent"
                  r="16"
                  cx="18"
                  cy="18"
                />
                <circle
                  className="text-blue-500"
                  strokeWidth="3"
                  strokeDasharray="100"
                  strokeDashoffset="25"
                  strokeLinecap="round"
                  stroke="url(#gradient)"
                  fill="transparent"
                  r="16"
                  cx="18"
                  cy="18"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#007bff" />
                    <stop offset="100%" stopColor="#00c6ff" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-800">
                75%
              </span>
            </div>
            <button className="mt-4 bg-blue-950 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
              Generate Certificate
            </button>
          </div>
        </div>

        {/* Course Section */}
        <CourseSection courses={courses} />
        {/* Result Log Section */}
        <ResultLog results={results} />
      </div>
    </div>
  );
}

export default HeroSection;

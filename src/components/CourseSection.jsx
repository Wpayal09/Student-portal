import React from "react";
import icon from "../assets/Images/icon.png";

const CourseSection = ({ courses }) => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-blue-950 p-6 rounded-lg shadow-md flex flex-col items-center border border-gray-100 w-full transform transition duration-300 hover:scale-105 hover:shadow-lg  transition-colors"
        >
          <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center mt-4">
            <img
              src={icon}
              alt={`${course.title} Logo`}
              className="w-[54px] h-[57px] mt-3"
            />
          </div>
          <p className="text-lg font-semibold text-white mt-4">
            {course.title}
          </p>
          <div className="w-full mt-4">
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: course.progress }}
              ></div>
            </div>
            <p className="text-sm text-white mt-2">{course.progress} Complete</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseSection;

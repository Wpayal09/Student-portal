import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaClipboard,
  FaComments,
  FaCog,
  FaBars,
  FaTable,
} from "react-icons/fa";
import LogoIcon from "../assets/Images/GA.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-[#A3D3F2] text-black flex flex-col items-center p-3 min-h-screen transition-all duration-300 rounded-2xl shadow-lg ${
        isOpen ? "w-48" : "w-16"
      } ml-4 mt-5 mb-6`}
    >
      {/* Logo & Hamburger Button Container */}
      <div
        className={`flex items-center w-full ${
          isOpen ? "justify-between" : "flex-col"
        }`}
      >
        {/* Logo Section */}
        <img
          src={LogoIcon}
          alt="Logo"
          className={`object-contain transition-all duration-300 ${
            isOpen ? "w-24" : "w-10"
          }`}
        />

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-full hover:bg-[#86BFE5] ${
            isOpen ? "" : "mt-4"
          }`}
        >
          <FaBars className="text-xl" />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <ul className="mt-6 space-y-4 flex-wrap">
        {[
          { icon: <FaHome />, text: "Home", path: "/home" },
          { icon: <FaBook />, text: "My Courses", path: "/my-courses" },
          { icon: <FaClipboard />, text: "Assignments", path: "/assignments" },
          { icon: <FaTable />, text: "Assessments", path: "/assessments" },
          { icon: <FaComments />, text: "Forum", path: "/forum" },
          { icon: <FaCog />, text: "Settings", path: "/settings" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="flex items-center bg-white p-3 rounded-md shadow-md hover:bg-[#86BFE5] justify-center"
            >
              {item.icon}
              {isOpen && (
                <span className="text-sm font-medium ml-3">{item.text}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

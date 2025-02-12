import React, { useState } from 'react';
import { FaHome, FaBook, FaClipboard, FaComments, FaCog, FaBars } from 'react-icons/fa';
import LogoIcon from '../assets/Images/GA.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-[#A3D3F2] text-black flex flex-col p-4 h-full transition-all duration-300 ${
        isOpen ? 'w-48' : 'w-16'
      }`}
    >
      {/* Company Logo */}
      <div className="flex items-center justify-center mb-6">
        <img
         src={LogoIcon} alt="Logo"
          className={`object-contain transition-all duration-300 ${isOpen ? 'w-32' : 'w-10'}`}
        />
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 mb-6 self-start"
      >
        <FaBars className="text-xl flex-shrink-0" />
      </button>

      {/* Sidebar Icons with Labels */}
      <ul className="space-y-4">
        <li className="flex items-center cursor-pointer hover:bg-[#86BFE5] p-3 rounded-lg">
          <FaHome className="text-xl flex-shrink-0" />
          {isOpen && <span className="text-sm font-medium ml-3">Home</span>}
        </li>
        <li className="flex items-center cursor-pointer hover:bg-[#86BFE5] p-3 rounded-lg">
          <FaBook className="text-xl flex-shrink-0" />
          {isOpen && <span className="text-sm font-medium ml-3">My Course</span>}
        </li>
        <li className="flex items-center cursor-pointer hover:bg-[#86BFE5] p-3 rounded-lg">
          <FaClipboard className="text-xl flex-shrink-0" />
          {isOpen && <span className="text-sm font-medium ml-3">Assignments</span>}
        </li>
        <li className="flex items-center cursor-pointer hover:bg-[#86BFE5] p-3 rounded-lg">
          <FaComments className="text-xl flex-shrink-0" />
          {isOpen && <span className="text-sm font-medium ml-3">Forum</span>}
        </li>
        <li className="flex items-center cursor-pointer hover:bg-[#86BFE5] p-3 rounded-lg">
          <FaCog className="text-xl flex-shrink-0" />
          {isOpen && <span className="text-sm font-medium ml-3">Settings</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

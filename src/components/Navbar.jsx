import React from 'react';
import notificationIcon from '../assets/Images/notification (1) 1.png';
import profileIcon from '../assets/Images/profile.png';
import messageIcon from '../assets/Images/message 1.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-4 bg-[#E8F4FF] shadow-md w-full">
      {/* Left Side - Welcome Message */}
      <div className="text-lg font-semibold text-gray-900">
        <span className="text-xl font-bold">Dashboard</span> <br />
        <span className="text-gray-600">Welcome, <span className="font-medium">Amit</span></span>
      </div>

      {/* Right Side - Icons */}
      <div className="flex items-center space-x-6">
        {/* Profile Icon */}
        <div className="relative cursor-pointer">
          <img src={profileIcon} alt="Profile" className="w-10 h-10 rounded-full border-2 border-gray-300" />
        </div>

        {/* Notification Icon */}
        <div className="cursor-pointer">
          <img src={notificationIcon} alt="notification" className="w-6 h-6" />
        </div>
        
        {/* Message Icon */}
        <div className="cursor-pointer">
          <img src={messageIcon} alt="Message" className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

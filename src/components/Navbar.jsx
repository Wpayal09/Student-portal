import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";  // Import Firebase signOut
import { auth } from "../firebase/firebase.config";  // Import the auth instance
import notificationIcon from "../assets/Images/notification (1) 1.png";
import profileIcon from "../assets/Images/profile.png";
import messageIcon from "../assets/Images/message 1.png";
import Notification from "../components/Notification";

const Navbar = ({ setIsAuthenticated }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ Firebase Logout Function
  const handleLogout = async () => {
    try {
      console.log("Logging out..."); // Debugging step
      await signOut(auth);  // Sign the user out using Firebase authentication
      localStorage.removeItem("user"); // Optional: Remove any user data stored in localStorage
      sessionStorage.clear();  // Clear session data (if any)

      setIsAuthenticated(false);  // Update the parent component's state
      navigate("/", { replace: true });  // Navigate to the login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="flex items-center justify-between px-5 py-4 bg-[#D4EBF8]  w-full relative">
      <div className="text-lg font-semibold text-gray-900">
        <span className="text-xl font-bold">Dashboard</span> <br />
        <span className="text-gray-600">
          Welcome, <span className="font-medium">Amit</span>
        </span>
      </div>

      <div className="flex items-center space-x-6">
        {/* Profile Dropdown */}
        <div className="relative cursor-pointer" ref={profileDropdownRef}>
          <img
            src={profileIcon}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
            onClick={() => setShowProfileDropdown((prev) => !prev)}
          />
          {showProfileDropdown && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
              <div
                className="p-2 hover:bg-gray-100 text-gray-700 cursor-pointer"
                onClick={handleLogout} // Calls the updated logout function
              >
                Logout
              </div>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative cursor-pointer" ref={dropdownRef}>
          <img
            src={notificationIcon}
            alt="notification"
            className="w-6 h-6"
            onClick={() => setShowNotifications((prev) => !prev)}
          />
          {showNotifications && (
            <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded shadow-lg z-50">
              <Notification />
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="cursor-pointer">
          <img src={messageIcon} alt="Message" className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

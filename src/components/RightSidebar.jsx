import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt, FaClipboardList, FaBars } from "react-icons/fa";

const RightSidebar = ({ setIsRightSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setIsRightSidebarOpen(isOpen);
  }, [isOpen, setIsRightSidebarOpen]);

  return (
    <div
      className={`bg-[#FEF6ED] shadow-lg rounded-xl transition-all duration-300 
                  relative flex flex-col ${
                    isOpen ? "w-80" : "w-16"
                  } min-h-screen mr-3 mt-20 mb-5`}
    >
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 text-[#23395B] absolute z-10 ${isOpen ? "right-4 top-4" : "top-4 left-1/2 transform -translate-x-1/2"}`}
      >
        <FaBars className="text-2xl" />
      </button>

      {isOpen ? (
        <div className="flex flex-col p-4 space-y-6 flex-grow mt-10">
          {/* Calendar Section */}
          <div className="bg-[#D6E6FF] p-4 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-[#23395B]">
              Selected Date: {date.toDateString()}
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md bg-[#D6E6FF] p-2">
              <Calendar
                onChange={setDate}
                value={date}
                className="w-full"
                formatShortWeekday={(locale, date) =>
                  date
                    .toLocaleDateString(locale, { weekday: "short" })
                    .charAt(0)
                }
                tileContent={() => null} // Remove dots
              />
            </div>
          </div>

          {/* Upcoming Classes */}
          <div className="relative bg-[#D6E6FF] p-4 rounded-xl shadow-md">
            <div className="absolute inset-0 bg-[#D6E6FF] rounded-xl -z-10"></div>
            <h2 className="text-lg font-semibold mb-2 text-[#23395B]">
              Upcoming Classes
            </h2>
            <div className="inline-block bg-white p-2 rounded shadow">
              <p className="text-sm font-medium text-[#23395B]">
                Soft Skills by V.Kalyan Kumar
              </p>
              <p className="text-xs text-[#E76F51] font-semibold">
                20 Feb 2025
              </p>
            </div>
            <div className="inline-block bg-white p-2 rounded shadow mt-2">
              <p className="text-sm font-medium text-[#23395B]">
                Aptitude by Sumit Gaikwad
              </p>
              <p className="text-xs text-[#E76F51] font-semibold">
                21 Feb 2025
              </p>
            </div>
            <p 
              className="text-[#E76F51] cursor-pointer mt-2 text-sm font-semibold"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              View all classes
            </p>
            {showDropdown && (
              <div className="mt-2 bg-white p-3 rounded-xl shadow-md">
                <div className="border-b pb-2 mb-2">
                  <p className="text-sm font-medium text-[#23395B]">Web Development</p>
                  <p className="text-xs text-[#E76F51] font-semibold">22 Feb 2025 - 10:00 AM</p>
                </div>
                <div className="border-b pb-2 mb-2">
                  <p className="text-sm font-medium text-[#23395B]">Data Structures</p>
                  <p className="text-xs text-[#E76F51] font-semibold">23 Feb 2025 - 2:00 PM</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#23395B]">Machine Learning</p>
                  <p className="text-xs text-[#E76F51] font-semibold">24 Feb 2025 - 11:00 AM</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-20 mt-16">
          <button onClick={() => setIsOpen(true)}>
            <FaCalendarAlt className="text-3xl text-[#23395B]" />
          </button>
          <button onClick={() => setIsOpen(true)}>
            <FaClipboardList className="text-3xl text-[#23395B]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;

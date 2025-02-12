import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt, FaClipboardList, FaBars } from "react-icons/fa";

const RightSidebar = ({ setIsRightSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const upcomingClasses = [
    { title: "Soft Skills by V.Kalyan Kumar", date: "20 Feb 2025" },
    { title: "Aptitude by Sumit Gaikwad", date: "21 Feb 2025" },
  ];

  useEffect(() => {
    setIsRightSidebarOpen(isOpen);
  }, [isOpen, setIsRightSidebarOpen]);

  return (
    <div
      className={`bg-[#FEF6ED] shadow-lg rounded-lg transition-all duration-300 relative h-screen flex flex-col ${
        isOpen ? "w-80" : "w-16"
      }`}
    >
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#23395B] self-end"
      >
        <FaBars className="text-2xl" />
      </button>

      {isOpen ? (
        <div className="flex flex-col overflow-y-auto p-4 space-y-6 h-full">
          {/* Calendar Section */}
          <div className="bg-[#D6E6FF] p-4 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-[#23395B]">
              Selected Date: {date.toDateString()}
            </h2>
            <div className="rounded-lg overflow-hidden shadow-md bg-[#D6E6FF] p-2">
              <Calendar onChange={setDate} value={date} className="w-full" />
            </div>
          </div>

          {/* Upcoming Classes */}
          <div className="bg-[#D6E6FF] p-4 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-[#23395B]">
              Upcoming Classes
            </h2>
            <ul>
              {upcomingClasses.map((cls, index) => (
                <li
                  key={index}
                  className="mb-2 p-2 bg-white rounded shadow flex justify-between"
                >
                  <p className="text-sm font-medium text-[#23395B]">
                    {cls.title}
                  </p>
                  <p className="text-xs text-[#E76F51] font-semibold">
                    {cls.date}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-[#E76F51] cursor-pointer mt-2 text-sm font-semibold">
              View all classes
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-20 mt-10">
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

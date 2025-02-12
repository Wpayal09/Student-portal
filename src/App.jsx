import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import HeroSection from "./components/HeroSection";

function App() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area (Navbar and HeroSection) */}
      <div
        className={`transition-all duration-300 flex-grow ${
          isRightSidebarOpen ? "w-[calc(100%-320px)]" : "w-[calc(100%-64px)]"
        }`}
      >
        <Navbar />
        <HeroSection />
      </div>

      {/* Right Sidebar */}
      <RightSidebar setIsRightSidebarOpen={setIsRightSidebarOpen} />
    </div>
  );
}

export default App;

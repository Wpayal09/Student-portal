import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import HeroSection from "./components/HeroSection";
import MyCourses from "./components/MyCourse";
import Assignments from "./components/Assignment";
import Forum from "./components/Forum";
import Settings from "./components/Setting";
import Login from "./Auth/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true); // Sidebar toggle state

  return (
    <Router>
      {!isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <div className="flex min-h-screen bg-[#D4EBF8]">
          {/* Left Sidebar */}
          <Sidebar isAuthenticated={isAuthenticated} />

          {/* Main Content Area */}
          <div className="flex-grow flex flex-col">
            <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

            {/* Dynamic Content Changes Based on Route */}
            <div className="flex-grow p-6">
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HeroSection />} />
                <Route path="/my-courses" element={<MyCourses />} />
                <Route path="/assignments" element={<Assignments />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </div>
          </div>

          {/* Right Sidebar */}
          <RightSidebar 
            isAuthenticated={isAuthenticated} 
            isRightSidebarOpen={isRightSidebarOpen} 
            setIsRightSidebarOpen={setIsRightSidebarOpen} 
          />
        </div>
      )}
    </Router>
  );
}

export default App;

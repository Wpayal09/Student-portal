import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import HeroSection from "./HeroSection";
import Logout from "./Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex flex-col flex-grow">
                <Navbar />
                <div className="flex-grow">
                  <HeroSection />
                </div>
              </div>
              <RightSidebar />
            </div>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;

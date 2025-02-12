import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar"; // Import the new right sidebar component

function App() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area (Navbar and other content) */}
      <div className="flex-grow">
        <Navbar />
        {/* Add other components/content below Navbar */}
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}

export default App;

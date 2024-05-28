import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Display from "./Components/Display";

const App = () => {
  return (
    <div className="h-screen bg-slate-200">
      <Navbar />
      <div className=" h-[90%] w-full flex">
        <Sidebar />
        <Display/>
      </div>
    </div>
  );
};

export default App;

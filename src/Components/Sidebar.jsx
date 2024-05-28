import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { GrAppsRounded } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/5 h-full bg-white shadow-md p-4">
      <div className="flex flex-col items-center">
        <div className="w-full md:w-60 h-12 rounded-xl text-xl font-medium bg-slate-100 flex items-center mb-4">
          <FontAwesomeIcon className="ml-4 md:ml-8" icon={faHouse} />
          <button
            type="button"
            className="w-full h-10 rounded-xl text-xl font-medium bg-slate-100 ml-4 md:ml-0"
          >
            Dashboard
          </button>
        </div>
        <div className="w-full md:w-60 h-12 rounded-xl text-xl font-medium my-4 bg-green-500 flex items-center cursor-pointer">
          <FontAwesomeIcon
            className="w-6 h-6 md:w-10 md:h-10 text-white ml-4 md:ml-7"
            icon={faGears}
          />
          <select
            name=""
            id=""
            className="w-full h-10 rounded-xl bg-green-500 text-xl outline-none cursor-pointer text-center text-white font-medium appearance-none py-2 pr-8 ml-4 md:ml-0"
          >
            <option value="service" className="text-white bg-red-300">
              Service
            </option>
            <option value="option2">Option 2</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        <div className="w-full md:w-60 h-14 rounded-xl text-xl font-medium bg-slate-100 flex items-center">
          <GrAppsRounded className="ml-4 md:ml-6 w-6 h-6 md:w-10 md:h-8" />
          <button
            type="button"
            className="w-full h-14 rounded-xl text-xl font-medium ml-4 md:ml-2 bg-slate-100"
          >
            Other Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

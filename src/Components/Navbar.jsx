import React from "react";
import abc from "../assets/images.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white flex  items-center justify-around shadow-2xl">
      <div className="w-80 h-20 ">
        <img className="w-80 h-full object-contain" src={abc} alt="" />
      </div>
      <div className="w-40 h-20  flex justify-center items-center">
        <FontAwesomeIcon className="w-2/4 h-10 " icon={faBarsStaggered} />
      </div>
      <div className="w-2/5 h-2 flex justify-center items-center ">
        <div className="bg-green-100 h-12 w-10 border-none rounded-l-sm flex justify-center items-center pl-2 text-lg">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          type="text"
          placeholder="Search here.."
          className="bg-green-100 w-4/5 h-12 rounded-sm p-5 outline-none "
        />
      </div>
      <div className="w-1/4 h-20 flex justify-center items-center">
        <div className="w-1/4 h-ful flex justify-center items-center">
          <FontAwesomeIcon
            className="w-1/4 h-1/4 bg-green-200 rounded p-2"
            icon={faComments}
          />
        </div>
        <div className="w-1/4 h-full flex justify-center items-center">
          <FontAwesomeIcon
            className="w-1/4 h-1/4 bg-red-200 rounded p-2"
            icon={faBell}
          />
        </div>
        <div className="w-2/4  h-full flex justify-center items-center">
          <FontAwesomeIcon
            className="w-1/4 h-2/4 bg-red-300 rounded p-2"
            icon={faUserTie}
          />
          <div className="w-5">
            <select className="outline-none" name="" id="">
              <option value="sridhar">Sridhar</option>
            </select>
            <h1 className="ml-1">Admin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

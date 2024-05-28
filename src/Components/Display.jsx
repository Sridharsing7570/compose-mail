import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LuMailX } from "react-icons/lu";
import { RiMailForbidLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";

import CalenderButton from "./CalenderButton";
import ComposeEmail from "./ComposeEmail";

const Display = () => {
  return (
    <div className="w-10/12  h-[100%] ">
      <div className="h-24 w-full  flex items-center justify-between">
        {/* for compose mail */}

        <div className="h-20 w-80  text-4xl font-medium  flex items-center">
          <h2 className="text-center ml-5 font-serif font-semibold">
            Compose Mail
          </h2>
        </div>

        {/* for cretae calender, sent mail, draft mail, deleted mail, faild mail, filters clients */}

        <div className="h-20 w-[65%] flex justify-around items-center ">
          {/* calender button */}
          <div className="bg-green-400 h-10 w-28 rounded-lg ">
            <CalenderButton />
          </div>
          <div className="bg-blue-400 h-10  w-28 rounded-lg">
            <button
              className="bg-blue-400 h-10 text-white  w-20 rounded-lg"
              type="button"
            >
              Sent Mail
            </button>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="bg-yellow-400 h-10  w-28 rounded-lg">
            <button
              className="bg-yellow-400 h-10  w-20 rounded-lg text-white"
              type="button"
            >
              Draft Mail
            </button>
            <FontAwesomeIcon icon={faSquareEnvelope} />
          </div>
          <div className="bg-red-400 h-10 w-36 rounded-lg mr-1 flex items-center text-center">
            <button
              className="bg-red-400 h-10 w-24 rounded-lg text-white ml-2 flex items-center text-center"
              type="button"
            >
              Deleted Mail
            </button>
            <LuMailX className="ml-3 mt-1" />
          </div>
          <div className="bg-yellow-700 h-10 w-28 rounded-lg flex items-center justify-around">
            <button className="text-white h-10 w-20 rounded-lg" type="button">
              Failed Mail
            </button>
            <RiMailForbidLine />
          </div>
          <div className="bg-blue-700 h-10 w-32 rounded-lg flex items-center">
            <button className=" h-10 w-24 rounded-lg text-white" type="button">
              Filter Clients
            </button>
            <FaFilter />
          </div>
        </div>
      </div>

      {/* box for mail */}
      <ComposeEmail />
    </div>
  );
};

export default Display;

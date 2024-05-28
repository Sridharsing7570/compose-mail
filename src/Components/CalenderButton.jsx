import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalenderButton = () => {
  // state handle for calendar
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const datePickerRef = useRef(null);

  // function for when click outside the calendar will close
  const handleClickOutside = (event) => {
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeDate = (date) => {
    setStartDate(date);
    setIsOpen(false);
  };

  return (
    <div ref={datePickerRef} className="relative">
      <button
        onClick={handleButtonClick}
        className="text-center bg-green-400 h-10 w-20 rounded-lg p-2 text-white"
      >
        Calendar
      </button>
      <FontAwesomeIcon
        className="cursor-pointer ml-2"
        onClick={handleButtonClick}
        icon={faCalendarDays}
      />
      {isOpen && (
        <div className="absolute z-10">
          <DatePicker selected={startDate} onChange={handleChangeDate} inline />
        </div>
      )}
    </div>
  );
};

export default CalenderButton;

import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
const Day = ({ day, rowIdx }) => {
  const currentDay = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };
  const { setDaySelected, setShowEventModal, savedEvents,setSelectedEvent,intervieweeName } =
    useContext(GlobalContext);
  const [currentDayEvent, setCurrentDayEvent] = useState([]);
  useEffect(() => {
    const currentEvents = savedEvents.filter(
      (e) => dayjs(e.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setCurrentDayEvent(currentEvents);
  }, [savedEvents, day]);
  
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && <p className="text-sm mt-1">{day.format("ddd")}</p>}
        <p className={`text-sm p-1 my-1 text-center ${currentDay()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {currentDayEvent.map((e, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(e)}
            className={`bg-${e.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {e.title}
            <br />
            With:{e.intervieweeName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;

import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import './Day.scss'
const Day = ({ day, rowIdx }) => {
  const currentDay = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "currentDay"
      : "";
  };
  const { setDaySelected, setShowEventModal, savedEvents,setSelectedEvent } =
    useContext(GlobalContext);
  const [currentDayEvent, setCurrentDayEvent] = useState([]);
  useEffect(() => {
    const currentEvents = savedEvents.filter(
      (e) => dayjs(e.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setCurrentDayEvent(currentEvents);
  }, [savedEvents, day]);
  
  return (
    <div className="day">
      <header className="day__header">
        {rowIdx === 0 && <p className="day__dayName">{day.format("ddd")}</p>}
        <p className="day__dayName--mobile">{day.format("ddd")}</p>

        <p className={`day__numericDay ${currentDay()}`}>{day.format("DD")}</p>
      </header>
      <div
        className="day__select"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      ></div>
      <div>
        {currentDayEvent.map((e, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(e)}
            className="day__event"
            style={{ backgroundColor: `${e.label}` }}
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

import dayjs from "dayjs";
import React from "react";

const Day = ({ day, rowIdx }) => {
  const currentDay = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && <p className="text-sm mt-1">{day.format("ddd")}</p>}
        <p className={`text-sm p-1 my-1 text-center ${currentDay()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
};

export default Day;
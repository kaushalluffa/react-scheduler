import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const AddEvent = () => {
  const { setShowEventModal} =
    useContext(GlobalContext);
  return (
    <span
      onClick={() => {
        setShowEventModal(true);
      }}
      className="border border-blue-200 p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <span className="pl-3 pr-7">Add Event</span>
    </span>
  );
};

export default AddEvent;

import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const AddEvent = ({ className }) => {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <span
      onClick={() => {
        setShowEventModal(true);
      }}
      className={className}
    >
      <span style={{ paddingLeft: "0.75rem", paddingRight: "1.75rem" }}>
        Add Event
      </span>
    </span>
  );
};

export default AddEvent;

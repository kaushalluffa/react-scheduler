import dayjs from "dayjs";
import React, { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import GlobalContext from "./GlobalContext";
function eventReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((event) => (event.id === payload.id ? payload : event));
    case "delete":
      return state.filter((e) => e.id !== payload.id);
    default:
      throw new Error();
  }
}
function initialValue() {
  const storedEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
  return parsedEvents;
}
const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);
  const [savedEvents, dispatch] = useReducer(eventReducer, [], initialValue);
  useEffect(()=>{
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  },[savedEvents])
  useEffect(()=>{
    if(!showEventModal){
      setSelectedEvent(null)
    }
  },[showEventModal])
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        savedEvents,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatch,
        selectedEvent,
        setSelectedEvent,

        setLabels,
        labels,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;

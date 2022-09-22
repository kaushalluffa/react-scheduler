import dayjs from "dayjs";
import React from "react";
import { useState } from "react";
import GlobalContext from "./GlobalContext";
const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;

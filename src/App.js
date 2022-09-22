import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Month from "./components/Month/Month";
import GlobalContext from "./context/GlobalContext";
import { getMonth } from "./utils/utils";
const App = () => {
  const { monthIndex } = useContext(GlobalContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header monthIndex={monthIndex} />
        <div className="flex flex-1">
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};

export default App;

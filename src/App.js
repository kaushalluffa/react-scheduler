import React, { useContext, useEffect, useState } from "react";
import "./App.scss";
import DialogBox from "./components/DialogBox/DialogBox";
import Header from "./components/Header/Header";
import Month from "./components/Month/Month";
import GlobalContext from "./context/GlobalContext";
import { getMonth } from "./utils/utils";
const App = () => {
  const { monthIndex,showEventModal } = useContext(GlobalContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      {showEventModal && <DialogBox />}
      <div className="container">
        <Header monthIndex={monthIndex} />
        <div className="bigCalendar">
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};

export default App;

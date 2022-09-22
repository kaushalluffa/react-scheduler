import React, { Fragment } from "react";
import Day from "../Day/Day";

const Month = ({ month }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((monthRow, idx) => (
        <Fragment key={idx}>
          {monthRow.map((eachDay, i) => (
            <Day day={eachDay} key={i} rowIdx={idx} />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Month;

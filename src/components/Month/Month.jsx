import React, { Fragment } from "react";
import Day from "../Day/Day";
import './Month.scss'

const Month = ({ month }) => {
  return (
    <div className="month">
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

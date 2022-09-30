import React, { useContext } from 'react'
import dayjs from 'dayjs'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GlobalContext from '../../context/GlobalContext';
import AddEvent from '../AddEvent/AddEvent';
import './Header.scss'
const Header = () => {
    const {monthIndex,setMonthIndex} = useContext(GlobalContext)
    const handleReset = ()=>{
        setMonthIndex(dayjs().month())
    }
    const handlePrev = ()=>{
         setMonthIndex(monthIndex - 1);
    }
    const handleNext = ()=>{
         setMonthIndex(monthIndex + 1);
    }
    const handleAdd = ()=>{}
  return (
    <header className="header">
      <h1 className="header__heading">Calendar</h1>
      <button onClick={handleReset} className="header__todayBtn">
        Today
      </button>
      <button onClick={handlePrev}>
        <span className="header__prev">
          <ChevronLeftIcon />
        </span>
      </button>
      <button onClick={handleNext}>
        <span className="header__prev">
          <ChevronRightIcon />
        </span>
      </button>
      <button onClick={handleAdd}>
        <AddEvent className='header__addBtn' />
      </button>
      <h2 className="header__today">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}

export default Header
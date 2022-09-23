import React, { useContext } from 'react'
import dayjs from 'dayjs'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GlobalContext from '../../context/GlobalContext';
import AddEvent from '../AddEvent/AddEvent';
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
    <header className="px-4 py-2 flex-items-center">
      <h1 className="mr-10 text-xl text-black-500 fond-bold">Calendar</h1>
      <button onClick={handleReset} className="border border-blue-400 rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrev}>
        <span className="material-icons-outlined cursor-pointer text-blue-600 mx-2">
        <ChevronLeftIcon/>
        </span>
      </button>
      <button onClick={handleNext}>
        <span className="material-icons-outlined cursor-pointer text-blue-600 mx-2">
         <ChevronRightIcon/>
          
        </span>
      </button>
      <button onClick={handleAdd}>
        <AddEvent/>
      </button>
      <h2 className="ml-4 text-xl text-black-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}

export default Header
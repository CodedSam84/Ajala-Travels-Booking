import "./hero.css";
import AirlineSeatIndividualSuiteTwoToneIcon from '@mui/icons-material/AirlineSeatIndividualSuiteTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from "react";
import { format } from "date-fns";
import Guest from "../guest/Guest";

const Hero = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
      color: '#8D965E'
    }
  ]);

  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  const dateChangeHandler = item => setDate([item.selection]);

  const calendarToggleHandler = () => {
    if (toggleProfile) { 
      setToggleProfile(!toggleProfile) 
    }

    setToggleCalendar(!toggleCalendar);
  };
  
  const profileToggleHandler = () => {
    if (toggleCalendar) { 
      setToggleCalendar(!toggleCalendar) 
    }

    setToggleProfile(!toggleProfile);
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Book a stay in one of the worlds best place</h2>
        <p>Vacation home for you and whoever you call family. Enjoy the vacation and peace of mind you deserve.</p>
      </div>
      <div className="search-filters">
        <div className="search-filter-item input-size">
          <AirlineSeatIndividualSuiteTwoToneIcon/>
          <input type="text" placeholder="Where are you going?"/>
        </div>

        <div onClick={calendarToggleHandler} className="search-filter-item check">
          <CalendarMonthTwoToneIcon/>
          <span>
            { `${format(date[0].startDate, "dd/MM/yyyy" )} - 
            ${format(date[0].endDate, "dd/MM/yyyy")}` }
          </span>
        </div>
        
        <div onClick={profileToggleHandler} className="search-filter-item adult">
          <PersonTwoToneIcon/>
          <span>2 adults .0 children .1 room </span>
        </div>

        <button className="search-button">SEARCH</button>
      </div>
      
      { toggleCalendar && <DateRange
        editableDateInputs={true}
        onChange={dateChangeHandler}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className="date"
      /> }

      { toggleProfile && <div className="guest-profile-container">
        <Guest guestInfo="adults"/>
        <Guest guestInfo="children"/>
        <Guest guestInfo="rooms"/>
      </div> }
    </div>
  )
}

export default Hero;

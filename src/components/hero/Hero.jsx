import "./hero.css";
import AirlineSeatIndividualSuiteTwoToneIcon from '@mui/icons-material/AirlineSeatIndividualSuiteTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useContext, useState } from "react";
import { format } from "date-fns";
import Guest from "../guest/Guest";
import { GuestContext } from "../../context/guest";

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

  const { guest, updateGuestValue } = useContext(GuestContext);
  const updateGuest = (info, operation) => updateGuestValue(info, operation);

  const dateChangeHandler = item => setDate([item.selection]);

  const calendarToggleHandler = () => {
    if (toggleProfile) { 
      setToggleProfile(!toggleProfile) 
    }

    setToggleCalendar(!toggleCalendar);
  };
  
  const profileToggleHandler = (e) => {
    e.stopPropagation();
    if (toggleCalendar) { 
      setToggleCalendar(!toggleCalendar) 
    }

    setToggleProfile(!toggleProfile);
  };

  const toggleFromHero = () => {
    if (toggleProfile) { 
      setToggleProfile(!toggleProfile) 
    }

    if (toggleCalendar) { 
      setToggleCalendar(!toggleCalendar) 
    }
  };

  return (
    <div onClick={toggleFromHero}className="hero">
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
          <span>{guest.adults} adults .{guest.children} children .{guest.rooms} rooms </span>
        </div>

        <button className="search-button">SEARCH</button>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        { toggleCalendar && <DateRange
          editableDateInputs={true}
          onChange={dateChangeHandler}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="date"
        /> }
      </div>

      { toggleProfile && <div className="guest-profile-container">
        <Guest guestInfo="adults" guest={guest} updateGuest={updateGuest} limit={1}/>
        <Guest guestInfo="children" guest={guest} updateGuest={updateGuest} limit={0}/>
        <Guest guestInfo="rooms" guest={guest} updateGuest={updateGuest} limit={1}/>
      </div> }
    </div>
  )
}

export default Hero;

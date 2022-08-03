import "./search.css";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import { GuestContext } from "../../context/guest";
import Guest from "../guest/Guest";

const Search = () => {
  const location = useLocation();
  console.log(location);
  const { guest, updateGuestValue } = useContext(GuestContext);

  const updateGuest = (info, operation) => updateGuestValue(info, operation);

  const [date, setDate] = useState(location.state.date);
  const [startDate, setStartDate] = useState(date[0].startDate);
  const [endDate, setEndDate] = useState(date[0].endDate);
  const [destination, setDestination] = useState(location.state.destination);
  const [calendarStart, setCalendarStart] = useState(false);
  const [calendarEnd, setCalendarEnd] = useState(false);
  const [guestModal, setGuestModal] = useState(false);

  const handleStartDate = (date) => setStartDate(date);
  const handleEndDate = (date) => setEndDate(date);
 
  const handleInputChange = (e) => setDestination(e.target.value);

  const navigate = useNavigate();
  const handleNavigate = () => navigate("/hotels/:id", {state: {date, destination}});

  const toggleCalendarStart = () => {
    if (calendarEnd) { 
      setCalendarEnd(!calendarEnd);
    }

    if (guestModal) {
      setGuestModal(!guestModal);
    }

    setCalendarStart(!calendarStart);
  };

  const toggleCalendarEnd = () => {
    if (calendarStart) { 
      setCalendarStart(!calendarStart);
    }

    if (guestModal) {
      setGuestModal(!guestModal);
    }

    setCalendarEnd(!calendarEnd)
  };

  const toggleGuestModal = () => {
    if (calendarStart) { 
      setCalendarStart(!calendarStart);
    }

    if (calendarEnd) { 
      setCalendarEnd(!calendarEnd);
    }
    
    setGuestModal(!guestModal)
  };

  return (
    <div className="search">
      <div className="search-field-container">
        <h2>Search</h2>
        <div className="search-field">
          <label>Destination/property name:</label>
          <div className="input-container">
            <SearchTwoToneIcon/>
            <input onChange={handleInputChange} placeholder="Where are you going?" type="text" value={destination}/>
          </div>
        </div>

        <div className="search-field cursor">
          <label>Check-in date:</label>
          <div onClick={toggleCalendarStart} className="input-container">
            <CalendarMonthTwoToneIcon/>
            <span>{`${format(startDate, "dd/MM/yyyy" )}`}</span>
          </div>
          { calendarStart && <div className="calendar-container">
            <Calendar
            date={startDate}
            onChange={handleStartDate}
            color='#8D965E'
            minDate={new Date()}
          /> 
          </div> }
        </div>

        <div className="search-field cursor">
          <label>Check-out date:</label>
          <div onClick={toggleCalendarEnd} className="input-container">
            <CalendarMonthTwoToneIcon/>
            <span>{`${format(endDate, "dd/MM/yyyy" )}`}</span>
          </div>
          { calendarEnd && <div className="calendar-container">
            <Calendar
            date={endDate}
            onChange={handleEndDate}
            color='#8D965E'
            minDate={startDate}
          /> 
          </div> }
        </div>

        <div className="search-field cursor">
          <div onClick={toggleGuestModal} className="input-container">
            <PersonTwoToneIcon/>
            <span>{guest.adults} adults. {guest.children} children. {guest.rooms} rooms</span>
          </div>
        </div>

        { guestModal && <div className="guest-profile-container search-page">
          <Guest guestInfo="adults" guest={guest} updateGuest={updateGuest} limit={1}/>
          <Guest guestInfo="children" guest={guest} updateGuest={updateGuest} limit={0}/>
          <Guest guestInfo="rooms" guest={guest} updateGuest={updateGuest} limit={1}/>
        </div> }

        <button onClick={handleNavigate} type="submit">Search</button>
      </div>
    </div>
  );
}

export default Search;

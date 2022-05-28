import { useState } from "react";
import "./guest.css";

const Guest = ({guestInfo}) => {
  const [guest, setGuest] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  })
  
  const increaseGuestValue = () => {
    const newGuest = { ...guest, [guestInfo]: guest[guestInfo] + 1};
    setGuest(newGuest);
  }

  return (
    <div className="guest">
      <span>{guestInfo}</span>
      <div className="guest-profiles">
        <button onClick={increaseGuestValue} className="btn plus-btn">&#43;</button>
        <span>{guest[guestInfo]}</span>
        <button className="btn minus-btn">&#45;</button>
      </div>
    </div>
  )
}

export default Guest;


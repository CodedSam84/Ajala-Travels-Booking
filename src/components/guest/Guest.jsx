import "./guest.css";

const Guest = ({guestInfo, guest, updateGuest, limit}) => {
  const increaseGuestProfile = (e) => {
    e.stopPropagation();
    updateGuest(guestInfo, "plus");
  };

  const decreaseGuestProfile = (e) => {
    e.stopPropagation();
    updateGuest(guestInfo, "minus");
  };

  return (
    <div className="guest">
      <span>{guestInfo}</span>
      <div className="guest-profiles">
        <button onClick={increaseGuestProfile} className="btn plus-btn">&#43;</button>
        <span>{guest[guestInfo]}</span>
        <button disabled={guest[guestInfo] <= limit} onClick={decreaseGuestProfile} className="btn minus-btn">&#45;</button>
      </div>
    </div>
  )
}

export default Guest;


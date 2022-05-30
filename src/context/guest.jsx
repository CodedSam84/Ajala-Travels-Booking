import { createContext } from "react";
import { useState } from "react";

export const GuestContext = createContext({
  guest: {
    adults: 1,
    children: 0,
    rooms: 1,
  },

  updateGuestValue: () => {},
});

export const GuestProvider = ({children}) => {
  const [ guest, setGuest ] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const updateGuestValue = (typeOfInfo, operation) => {
    if (operation === "plus") {
      const increaseGuestInfo = {...guest, [typeOfInfo]: guest[typeOfInfo] + 1};
      setGuest(increaseGuestInfo)
    } else {
      const decreaseGuestInfo = {...guest, [typeOfInfo]: guest[typeOfInfo] - 1};
      setGuest(decreaseGuestInfo)
    }
  }

  const value = {
    guest,
    updateGuestValue,
  };

  return <GuestContext.Provider value={value}>{children}</GuestContext.Provider>;
}
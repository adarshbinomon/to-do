// Header.js
import React from 'react';

function Header() {
  const getDay = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    return days[today.getDay()];
  };

  return (
    <div className="subHeading">
      <br />
      <h2>Whoop, it's {getDay()} 🌝 ☕</h2>
    </div>
  );
}

export default Header;

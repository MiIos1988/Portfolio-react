import React, { useEffect, useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const DayNightComponent = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [background, setBackground] = useState("#212529");
  const [color, setColor] = useState("#e6e7ee ");
  const [filterInvert, setFilterInvert] = useState(100);

  const handleChange = () => {
    console.log(isChecked)
    setIsChecked(!isChecked);
    setBackground(isChecked ? "#e6e7ee " : "#212529")
    setColor(isChecked ? "#212529" : "#e6e7ee")
    setFilterInvert(!isChecked ? 100 : 0)
    document.documentElement.style.setProperty('--text-color', color);
    document.documentElement.style.setProperty('--background-color', background);
    document.documentElement.style.setProperty('--filter-invert', filterInvert);

  };


  return (
    <div className='dayNight'>
      <Toggle
        checked={isChecked}
        onChange={handleChange}
        icons={{
          checked: <span className='day'>🌞</span>,
          unchecked: <span className='night'>🌙</span>,
        }}
        aria-label="Toggle theme"
      />
    </div>
  );
};

export default DayNightComponent;

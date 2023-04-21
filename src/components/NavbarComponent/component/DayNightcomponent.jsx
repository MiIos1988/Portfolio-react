import React, { useEffect, useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const DayNightComponent = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [background, setBackground] = useState("#212529");
  const [color, setColor] = useState("#e6e7ee ");
  const [colorHello, setColorHello] = useState("#ffe600 ");
  const [filterInvert, setFilterInvert] = useState(100);
  const [shadowOne, setShadowOne] = useState("black");
  const [shadowTwo, setShadowTwo] = useState("rgba(155, 155, 155, 0.5)");

  const handleChange = () => {
    setIsChecked(!isChecked);
    setBackground(isChecked ? "#e6e7ee " : "#212529")
    setColor(isChecked ? "#212529" : "#e6e7ee")
    setColorHello(isChecked ? "#212529" : "#ffe600")
    setFilterInvert(!isChecked ? 100 : 0)
    setShadowOne(isChecked ? "#c7c7c7" : "black")
    setShadowTwo(isChecked ? "#fff" : "rgba(155, 155, 155, 0.5)")
    document.documentElement.style.setProperty('--text-color', color);
    document.documentElement.style.setProperty('--text-color-hello', colorHello);
    document.documentElement.style.setProperty('--background-color', background);
    document.documentElement.style.setProperty('--filter-invert', filterInvert);
    document.documentElement.style.setProperty('--shadow-one', shadowOne);
    document.documentElement.style.setProperty('--shadow-two', shadowTwo);

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

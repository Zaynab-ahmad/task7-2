import React from 'react';
import './RoutatingText.css';
import { BsArrowUpRight } from "react-icons/bs";

export default function RotatingText() {
  const text = "Explore More. Explore More.";

  return (
    <div className='outCircle'>
    <div className='circle'>
      <div className='circleArrow' style={{ color: "var(--primary-color)"}}>
        <BsArrowUpRight className='arrow' />
      </div>
      <div className='circleText'>
        {text.split('').map((char, i) => (
          <span
            key={i}
            style={{ transform: `rotate(${i * 12}deg)` }} // 
          >
            {char}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
}

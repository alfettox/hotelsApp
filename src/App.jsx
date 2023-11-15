// App.jsx

import React, { useState, useEffect } from 'react';
import './style/App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import cardsData from './data/cardsData.js';

function App() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hoursLeft = 24 - hours;
      const minutesLeft = 60 - minutes;
      const secondsLeft = 60 - seconds;

      setTimeLeft({
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft,
      });
    };

    calculateTimeLeft();

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        let seconds = prevTimeLeft.seconds - 1;
        let minutes = prevTimeLeft.minutes;
        let hours = prevTimeLeft.hours;

        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }

        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }

        return {
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <h3 className="promo">
        -25% Time left before the offer ends: {timeLeft.hours}H : {timeLeft.minutes}m : {timeLeft.seconds}s
      </h3>

      <div className="card-container">
        {cardsData.map((item) => (
          <Card
            key ={item.id}
            {...item}
          />
        ))}
      </div>
    </>
  );
}

export default App;

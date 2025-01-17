import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!targetDate) {
      console.warn('CountdownTimer: targetDate prop is required');
      return;
    }

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!targetDate) {
    return <div className="text-red-500">Please provide a target date</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-white backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-transform">
          <div className="text-3xl font-bold text-[#40ADE3]">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm uppercase tracking-wider text-teal-800">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

// Add prop validation
CountdownTimer.propTypes = {
  targetDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired
};

export default CountdownTimer;
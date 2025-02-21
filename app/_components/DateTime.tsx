'use client';

import {
  monthNames,
  formatTo12Hour,
  getOrdinalSuffix,
  getAmPm,
} from '../_utils/dateUtils';

import { useState, useEffect } from 'react';

export default function DateTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const year = currentTime.getFullYear();
  const date = currentTime.getDate();
  const hour = formatTo12Hour(currentTime.getHours());
  const minute = currentTime.getMinutes().toString().padStart(2, '0');
  const ampm = getAmPm(currentTime.getHours());
  const month = monthNames[currentTime.getMonth()];
  const dateSuffix = getOrdinalSuffix(date);

  return (
    <div>
      <p>
        {month}, {date}
        {dateSuffix}, {year} <br /> {hour}:{minute} {ampm}
      </p>
    </div>
  );
}

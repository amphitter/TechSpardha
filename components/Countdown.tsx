'use client';
import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date('2025-03-27T00:00:00');
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdown}>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.days}</span>
        <span className={styles.label}>Days</span>
      </div>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.hours}</span>
        <span className={styles.label}>Hours</span>
      </div>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.minutes}</span>
        <span className={styles.label}>Minutes</span>
      </div>
      <div className={styles.timeUnit}>
        <span className={styles.number}>{timeLeft.seconds}</span>
        <span className={styles.label}>Seconds</span>
      </div>
    </div>
  );
}

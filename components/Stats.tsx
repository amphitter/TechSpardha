"use client"
import { useEffect, useRef } from 'react';
import styles from './Stats.module.css';

export default function Stats() {
  const numberRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const targets = [600, 12, 48];
    const startCount = () => {
      numberRefs.current.forEach((element, index) => {
        let current = 0;
        const target = targets[index];
        const duration = 2500;
        const increment = target / (duration / 50);

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            clearInterval(timer);
            current = target;
          }
          if (element) {
            element.textContent = Math.ceil(current) + (index === 0 ? '+' : '');
          }
        }, 50);
      });
    };
    
    startCount();
  }, []);

  return (
    <section className={styles.stats}>
      <div className={styles.statItem}>
        <h3 ref={(el) => { numberRefs.current[0] = el; }}>0</h3>
        <p>Participants</p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.statItem}>
        <h3 ref={(el) => { numberRefs.current[1] = el; }}>0</h3>
        <p>Activities</p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.statItem}>
        <h3 ref={(el) => { numberRefs.current[2] = el; }}>0</h3>
        <p>Hours</p>
      </div>
    </section>
  );
} 

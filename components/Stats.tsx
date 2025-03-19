"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

export default function Stats() {
  const numberRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const targets = [600, 12, 48];

      const startCount = () => {
        numberRefs.current.forEach((element, index) => {
          if (!element) return;
          let current = 0;
          const target = targets[index];
          const duration = 2500;
          const increment = target / (duration / 50);

          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              clearInterval(interval);
              current = target;
            }
            element.textContent = Math.ceil(current) + (index === 0 ? "+" : "");
          }, 50);
        });
      };

      startCount();
    }, 1000); // 1-second delay for preloader

    return () => clearTimeout(timer);
  }, []);

  if (loading) return null;

  return (
    <section className={styles.stats}>
      <div className={styles.statItem}>
        <h3 ref={(el) => (numberRefs.current[0] = el)}>0</h3>
        <p>Participants</p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.statItem}>
        <h3 ref={(el) => (numberRefs.current[1] = el)}>0</h3>
        <p>Activities</p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.statItem}>
        <h3 ref={(el) => (numberRefs.current[2] = el)}>0</h3>
        <p>Hours</p>
      </div>
    </section>
  );
}

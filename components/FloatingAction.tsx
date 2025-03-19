'use client';
import styles from './FloatingAction.module.css';

export default function FloatingAction() {
  return (
    <div className={styles.floatingContainer}>
      <a 
        href="https://forms.gle/eCfEGwoyg7vKpeRB7" 
        className={styles.floatingButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Now
      </a>
    </div>
  );
}
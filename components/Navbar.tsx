'use client';
import Link from 'next/link';
import styles from './Navbar.module.css';
export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="#about-us">About</Link>
      <Link href="#events">Events</Link>
      <Link href="#venue">Venue</Link>
      <a 
        href="https://www.instagram.com/iteamsankalp/" 
        className={styles.communityButton}
      >
        Join Our Community
      </a>
    </nav>
  );
}
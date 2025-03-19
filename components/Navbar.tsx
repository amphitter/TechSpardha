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
      <b><Link href="/">Home</Link></b>
      <b><Link href="#about-us">About</Link></b>
      <b><Link href="#events">Events</Link></b>
      <b><Link href="#venue">Venue</Link></b>
      <b><a 
        href="https://www.instagram.com/iteamsankalp/" 
        className={styles.communityButton}
      >
        Join Our Community
      </a></b>
    </nav>
  );
}

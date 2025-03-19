import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://www.instagram.com/gitm_gurgaon/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/school/global-institute-of-technology-management-gurugram-gitm/" 
           target="_blank" 
           rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="https://twitter.com/gitmfarukhnagar" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={styles.icon} />
        </a>
      </div>
      <div className={styles.credits}>
        <p>&copy; 2025 Techस्पर्धा, GITM. All rights reserved.</p>
        <p className={styles.developers}>
          Developed by <a href="https://github.com/amphitter/" target="_blank" rel="noopener noreferrer">
            <FaGithub /> </a> <a href="https://www.linkedin.com/in/devansh-singh-amphitter/">Devansh </a> and <a href="https://github.com/manya04092005" target="_blank" rel="noopener noreferrer"> <FaGithub /></a><a href="https://www.linkedin.com/in/manya-kanojia-7a0334290/"> Manya</a>
        </p>
      </div>
    </footer>
  );
}

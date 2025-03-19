import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import Countdown from '@/components/Countdown';
import Stats from '@/components/Stats';
import WhyJoin from '@/components/WhyJoin';
import About from '@/components/About';
import EventsPreview from '@/components/EventsPreview';
import Venue from '@/components/Venue';
import Preloader from '@/components/preloader';
import styles from './page.module.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <Preloader />
    <>
      <Navbar />
      
      <main className={styles.main}>
        {/* Add Vanta Background */}
   
        <div className={styles.container}>
        <section className={styles.hero}>
          <Particles />
          <img 
            src="/assets/logo/logobanner.png" 
            alt="Tech Spardha Logo" 
            className={styles.logo}
          />
          
          <div className={styles.heroContent}>
            <h1>Welcome to Tech<span>स्पर्धा</span></h1>
            <h2 style={{ color: '#ffff' }}><b>
              Organized by Department of Computer Science and Engineering</b></h2>
              <br />
              <div className={styles.eventInfo}>
                <p>
                  <FaCalendarAlt className={styles.icon} />
                  28th - 29th March 2025
                </p>
                <p>
                  <FaMapMarkerAlt className={styles.icon} />
                  GITM, Gurgaon
                </p>
            </div>
            <center>
              <div className={styles.floatingContainer}>
                <a 
                  href="#events" 
                  className={styles.floatingButton}
                  rel="noopener noreferrer"
                >
                  Know More
                </a>
              </div>
            </center>
          </div>
        </section>
        
          </div>



        <Stats />
        
        <section id="about-us" className={styles.about}>
          <About />
        </section>

        <WhyJoin />
        <Countdown />
        <EventsPreview />

        <section id="venue" className={styles.venue}>
        <Venue />
        </section>
      </main>
      <Footer />
    </>
  );
}

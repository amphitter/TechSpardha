import styles from './Venue.module.css';

export default function Venue() {
  return (
    <section id="venue" className={styles.venueSection}>
      <h2 className={styles.subHeading}>Venue</h2>
      <div
        className={styles.venueContent}
        style={{
          color: 'white',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '23rem',
          textAlign: 'center',
        }}
      >
        <div className={styles.venueDetails}>
          <h2>
            <span style={{ color: 'orange', fontSize: '3rem' }}>C-1 Block</span>
          </h2>
          <address style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            Global Institute Of Technology & Management,
            <br />
            Farukhnagar, Gurgaon
          </address>
        </div>

        <div
          className={styles.mapContainer}
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '250px',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38352.31708978086!2d76.88593105691123!3d28.31331503908143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d38e740000001%3A0xe4c205e5be809fee!2sGITM%20-%20Gurgaon%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1709135361664!5m2!1sen!2sin"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '15px',
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GITM Location Map"
            aria-label="Google Maps location of GITM"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

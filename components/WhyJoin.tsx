import styles from './WhyJoin.module.css';

export default function WhyJoin() {
  return (
    <section className={styles.whyJoin}>


      <h2>Why Join Tech स्पर्धा?</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.icon}>🫂</div>
          <h3 className={styles.cardTitle}>Tech Community</h3>
          <p className={styles.cardText}>Join our Discord community of developers and innovators</p>
        </div>
        
        <div className={styles.card}>
          <div className={styles.icon}>🤝</div>
          <h3 className={styles.cardTitle}>Networking</h3>
          <p className={styles.cardText}>Connect with industry experts and like-minded peers</p>
        </div>
        
        <div className={styles.card}>
          <div className={styles.icon}>🎁</div>
          <h3 className={styles.cardTitle}>Goodies & Prizes</h3>
          <p className={styles.cardText}>Win exciting prizes and collect exclusive swag</p>
        </div>
      </div>
    
    </section>
  );
}

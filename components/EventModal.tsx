import styles from "./EventModal.module.css";
type EventType = {
  id: number;
  name: string;
  poster: string;
  details: string;
  pdf: string;
  registerLink: string;
};

interface EventModalProps {
  event: EventType;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.eventTitle}>{event.name}</h2>
        <p className={styles.details}>{event.details}</p>

        <div className={styles.buttonContainer}>
          <a href={`/assets/Rules_Of_The_Event/${event.pdf}`} target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
            Download Rules
          </a>
          <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className={styles.registerButton}>
            Register Now
          </a>
        </div>

        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
}

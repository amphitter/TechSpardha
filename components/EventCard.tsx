// EventCard.tsx
'use client';
import { useState } from 'react';
import styles from './EventCard.module.css';

interface EventCardProps {
  poster: string;
  name: string;
  details: string;
  pdf: string;
  registerLink: string;
  onViewDetails: () => void;
}

export default function EventCard({ poster, name, onViewDetails }: EventCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={`/assets/posters/${poster}`} 
          alt={`${name} event poster`} 
          className={styles.poster}
          loading="lazy"
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.eventName}>{name}</h3>
        
        <div className={styles.buttonGroup}>
          <button 
            onClick={onViewDetails}
            className={styles.detailsButton}
            aria-label={`View details for ${name}`}
          >
            Details
          </button>
          <a 
            href="#register"
            className={styles.registerButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
        </div>
      </div>
    </article>
  );
}
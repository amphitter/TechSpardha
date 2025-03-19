'use client';
import { useCallback } from 'react';
import styles from './Particles.module.css';

export default function Particles() {
  const createParticles = useCallback(() => {
    return Array.from({ length: 50 }).map((_, i) => (
      <div key={i} className={styles.particle}></div>
    ));
  }, []);

  return <div className={styles.particlesContainer}>{createParticles()}</div>;
}
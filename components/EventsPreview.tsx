'use client';
import { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';
import styles from './EventsPreview.module.css';

const allEvents = [
    { id: 1, name: 'Prototype Model', poster: 'prototype.jpg', details: 'Present innovative prototypes with real-world applications.', pdf: 'prototype-rules.pdf', registerLink: '#' },
    { id: 2, name: 'Code War', poster: 'code-war.jpg', details: 'Compete in a high-stakes coding battle against top programmers.', pdf: 'code-war-rules.pdf', registerLink: '#' },
    { id: 3, name: 'Debugging', poster: 'debugging.jpg', details: 'Hone your skills by finding and fixing bugs in the code.', pdf: 'debugging-rules.pdf', registerLink: '#' },
    { id: 4, name: 'Multimedia Presentation', poster: 'multimedia.jpg', details: 'Engage in creative storytelling through presentations, reels, and photography.', pdf: 'multimedia-rules.pdf', registerLink: '#' },
    { id: 5, name: 'E-Sports', poster: 'e-sports.jpg', details: 'Compete in BGMI, Free Fire, and Mini Militia tournaments.', pdf: 'esports-rules.pdf', registerLink: '#' },
    { id: 6, name: 'Business and Technical Talks', poster: 'business-talks.jpg', details: 'Gain insights from experts on business and tech innovations.', pdf: 'talks-rules.pdf', registerLink: '#' },
    { id: 7, name: 'Group Discussion', poster: 'group-discussion.jpg', details: 'Debate and discuss trending topics with a panel of peers.', pdf: 'gd-rules.pdf', registerLink: '#' },
    { id: 8, name: 'Poster Making', poster: 'poster-making.jpg', details: 'Unleash creativity by designing impactful posters.', pdf: 'poster-rules.pdf', registerLink: '#' },
    { id: 9, name: 'Logo Making', poster: 'logo-making.jpg', details: 'Design logos that define brands with your artistic vision.', pdf: 'logo-rules.pdf', registerLink: '#' },
    { id: 10, name: 'Idea Presentation', poster: 'idea-presentation.jpg', details: 'Design logos that define brands with your artistic vision.', pdf: 'idea-presentation.pdf', registerLink: '#' },
    { id: 11, name: 'Technical Rangoli', poster: 'technical ranogli.jpg', details: 'Design logos that define brands with your artistic vision.', pdf: 'technical ranogli.pdf', registerLink: '#' },
    { id: 12, name: 'Research Paper Presentation', poster: 'research paper.jpg', details: 'Design logos that define brands with your artistic vision.', pdf: 'research paper.pdf', registerLink: '#' },
  ];

export default function EventsPreview() {
  const [showAll, setShowAll] = useState(false);
  const visibleEvents = showAll ? allEvents : allEvents.slice(0, 6);
  const [selectedEvent, setSelectedEvent] = useState<{ id: number; name: string; poster: string; details: string; pdf: string; registerLink: string; } | null>(null);

  return (
    <section id='events' className={styles.eventsPreview}>
      <div className={styles.header}>
        <h2>Featured Tech Events</h2>
      </div>

      <div className={styles.eventsGrid}>
        {visibleEvents.map(event => (
          <EventCard 
            key={event.id} 
            {...event}
            onViewDetails={() => setSelectedEvent(event)}
          />
        ))}
      </div>

      {allEvents.length > 4 && (
        <button 
          className={styles.viewMore}
          onClick={() => setShowAll(!showAll)}
          aria-label={showAll ? 'Collapse events' : 'Expand all events'}
        >
          {showAll ? 'Show Less' : 'View All Events'}
        </button>
      )}

      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
}

'use client';
import { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';
import styles from './EventsPreview.module.css';

const allEvents = [
  { 
    id: 1, 
    name: 'Prototype Model', 
    poster: 'prototype.jpg', 
    details: 'This event invites participants to present innovative prototypes with real-world applications. Whether hardware or software-based, these prototypes should demonstrate creativity, feasibility, and impact in solving real-life problems. Participants will have an opportunity to showcase their technical expertise and practical thinking.', 
    pdf: 'prototype-rules.pdf', 
    registerLink: '#' 
},  
{ 
    id: 2, 
    name: 'Code War', 
    poster: 'code-war.jpg', 
    details: 'A high-stakes coding battle where programmers compete against the best minds in algorithmic problem-solving. Participants will tackle complex coding challenges under time constraints, testing their problem-solving skills, efficiency, and coding speed.', 
    pdf: 'code-war-rules.pdf', 
    registerLink: '#' 
},  
{ 
    id: 3, 
    name: 'Debugging', 
    poster: 'debugging.jpg', 
    details: 'A challenge for those with a keen eye for detail, this event requires participants to find and fix bugs in a given codebase. It tests logical thinking, programming knowledge, and efficiency in troubleshooting and optimization.', 
    pdf: 'debugging-rules.pdf', 
    registerLink: '#' 
},  
{ 
    id: 4, 
    name: 'Multimedia Presentation', 
    poster: 'multimedia.jpg', 
    details: 'A creative event where participants showcase their storytelling skills through digital presentations, reels, and photography. This competition encourages innovation in visual communication and content creation, testing participants\' ability to captivate an audience.', 
    pdf: 'multimedia-rules.pdf', 
    registerLink: '#' 
},  
{ 
    id: 5, 
    name: 'E-Sports', 
    poster: 'e-sports.jpg', 
    details: 'A thrilling gaming competition featuring popular games like BGMI, Free Fire, and Mini Militia. Gamers will battle it out in intense matches, requiring strategy, teamwork, and quick reflexes to claim victory.', 
    pdf: 'esports-rules.pdf', 
    registerLink: '#' 
},  
{ 
    id: 6, 
    name: 'Business Quiz', 
    poster: 'business-talks.jpg', 
    details: 'An insightful event where experts from the industry share knowledge on the latest trends in business and technology. Attendees will gain valuable perspectives on innovation, entrepreneurship, and career growth from experienced professionals.', 
    pdf: 'talks-rules.pdf', 
    registerLink: '#' 
},  
{ 
    id: 7, 
    name: 'Group Discussion', 
    poster: 'group-discussion.jpg', 
    details: 'A platform for intellectual debates and discussions on trending topics. Participants will engage in structured arguments, express their viewpoints, and challenge opposing perspectives, enhancing their communication and critical thinking skills.', 
    pdf: 'gd-rules.pdf', 
    registerLink: '#' 
},  
{ 
    id: 8, 
    name: 'Poster Making', 
    poster: 'poster-making.jpg', 
    details: 'An artistic event encouraging participants to design impactful posters that convey strong messages visually. This competition tests creativity, design skills, and the ability to communicate ideas effectively through graphics.', 
    pdf: 'poster-rules.pdf', 
    registerLink: '#' 
},  
{ 
    id: 9, 
    name: 'Logo Making', 
    poster: 'logo-making.jpg', 
    details: 'Participants will showcase their creativity by designing logos that define brands and businesses. This competition focuses on artistic vision, branding principles, and the ability to create visually compelling and meaningful logos.', 
    pdf: 'logo-rules.pdf', 
    registerLink: '#' 
},  
{ 
    id: 10, 
    name: 'Idea Presentation', 
    poster: 'idea-presentation.jpg', 
    details: 'A platform for innovative thinkers to present groundbreaking ideas with the potential for real-world impact. Participants will pitch their concepts, highlighting feasibility, originality, and implementation strategies.', 
    pdf: 'idea-presentation.pdf', 
    registerLink: '#' 
},  
{ 
    id: 11, 
    name: 'Technical Rangoli', 
    poster: 'technical-rangoli.jpg', 
    details: 'A fusion of tradition and technology, this event challenges participants to create rangoli designs with a technical theme. It blends creativity with engineering concepts, making for a unique and visually appealing competition.', 
    pdf: 'technical-rangoli.pdf', 
    registerLink: '#' 
},  
{ 
    id: 12, 
    name: 'Research Paper Presentation', 
    poster: 'research-paper.jpg', 
    details: 'An academic event where participants present their research findings on various technical or scientific topics. This competition evaluates depth of research, clarity of presentation, and relevance to modern challenges.', 
    pdf: 'research-paper.pdf', 
    registerLink: '#' 
}
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

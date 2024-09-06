"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './Firm.module.css';
import OurJourney from '../../components/OurJourney';
import OurClients from '../../components/OurClients';

export default function Firm() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const images = ["/cmt22.jpg", "/law.jpg"];

    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.firmPage}>
      <div className={styles.heroSection}>
        {["/cmt22.jpg", "/law.jpg"].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero Image ${index + 1}`}
            className={styles.heroImage}
            style={{ opacity: currentImageIndex === index ? 1 : 0 }}
          />
        ))}
      </div>
      <div id="ourJourney" className={styles.section}>
        <OurJourney scrollToSection={scrollToSection} />
      </div>
      <div id="ourClients" className={styles.section2}>
        <OurClients />
      </div>
    </div>
  );
}
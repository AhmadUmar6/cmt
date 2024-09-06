'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoColumn}>
          <img src="/newlogo.png" alt="Company Logo" className={styles.logo} />
          <div className={styles.followUs}>
            <h3>FOLLOW US ON</h3>
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
              </a>
              <a href="https://www.facebook.com/your-company" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} />
              </a>
              <a href="https://www.twitter.com/your-company" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.siteMap}>
          <h3>SITE MAP</h3>
          <ul>
            {['The Firm', 'Practice Areas', 'Our Team', 'Contact', 'Careers'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Flat No 305 Floor No 3 Silver Oaks Luxury apartments. F10, Islamabad</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> The Centaurus Mall, Tower-A Management Office, Mezzanine Floor Sector F-8/G-8, Islamabad</p>
          <p><FontAwesomeIcon icon={faPhone} /> +92-323-3333-469</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> shaharyar.tariq@cmtadvocates.com</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {currentYear ? currentYear : 'Loading...'} CMT Associates. All rights reserved.</p>
        <p>Developed by: <a href="https://ahmadumar.space" target="_blank" rel="noopener noreferrer" className={styles.developerLink}>AUF Devs</a></p>
      </div>
    </footer>
  );
}


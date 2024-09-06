import React from 'react';
import styles from './Maps.module.css';

export default function Maps() {
  return (
    <div className={styles.mapsContainer}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.6437117489177!2d73.05973941500183!3d33.684507480698785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfb2d3f1c2fb%3A0x38f4fb2bff2d36b1!2sSilver%20Oaks%20Luxury%20Apartments%2C%20F-10%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1625802092258!5m2!1sen!2s"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className={styles.address}>
          <h3>Silver Oaks Luxury Apartments</h3>
          <p>Flat No 305, Floor No 3, Silver Oaks Luxury Apartments, F-10, Islamabad</p>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.047179556639!2d73.0472169759447!3d33.70772807328873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfb0f4f77379%3A0xf8c50b8651f56d02!2sCentaurus%20Mall!5e0!3m2!1sen!2sus!4v1722702529391!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className={styles.address}>
          <h3>The Centaurus Mall</h3>
          <p>Tower-A Management Office, Mezzanine Floor, Sector F-8/G-8, Islamabad</p>
        </div>
      </div>
    </div>
  );
}

"use client";
import styles from './practice.module.css';
import Service from '../../components/Service';

export default function OurServices() {
  return (
    <div className={styles.ourServicesPage}>
      <div className={styles.imageContainer}>
        <img src="/cmt1.jpg" alt="Our Services" className={styles.serviceImage} />
      </div>
      <div id="Service" className={styles.sec2}>
        <Service />
      </div>
    </div>
  );
}

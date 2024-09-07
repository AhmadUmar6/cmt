"use client";
import Image from 'next/image';
import styles from './practice.module.css';
import Service from '../../components/Service';

export default function OurServices() {
  return (
    <div className={styles.ourServicesPage}>
      <div className={styles.imageContainer}>
        <Image
          src="/cmt1.jpg"
          alt="Our Services"
          className={styles.serviceImage}
          width={1920}
          height={1080}
          priority
          loading="eager"
        />
      </div>
      <div id="Service" className={styles.sec2}>
        <Service />
      </div>
    </div>
  );
}

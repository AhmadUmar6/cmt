import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './member2.module.css';

export default function Member2() {
  return (
    <div className={styles.memberPage}>
      <section className={styles.leftSection}></section>
      <section className={styles.centerSection}>
        <div className={styles.imageContainer}>
          <Image src="/st.jpg" alt="Member Image" width={210} height={210} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>Shaharyar Tariq</h1>
          <h2 className={styles.position}>Founding Partner</h2>
          <p className={styles.description}>
            Shaharyar Tariq is a seasoned legal professional with extensive experience in litigation and dispute resolution. He has represented clients in a wide range of cases, including commercial disputes, intellectual property rights, and regulatory compliance. Shaharyar is known for his strategic approach and dedication to achieving favorable outcomes for his clients.
            <br /><br />
            Shaharyar has a strong academic background, having earned his LLB from Punjab University and a specialization in WTO law from Bern University, Switzerland. He has also served as a lecturer at Punjab Law College, where he has mentored many aspiring lawyers.
            <br /><br />
            In addition to his legal practice, Shaharyar is actively involved in various professional organizations and has held leadership positions, including serving as a member of the Punjab Bar Council. His contributions to the legal community have been widely recognized, and he continues to be a prominent figure in the field of law.
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p>LLB | Punjab University (PU)</p>
          <p>LLM| University of Leicester, United Kingdom </p>
        </div>
      </section>
    </div>
  );
}

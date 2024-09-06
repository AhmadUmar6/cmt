import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './member10.module.css';

export default function Member10() {
  return (
    <div className={styles.memberPage}>
      <section className={styles.leftSection}></section>
      <section className={styles.centerSection}>
        <div className={styles.imageContainer}>
          <Image src="/wab.jpg" alt="Wania Abbas" width={210} height={210} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>Wania Abbas</h1>
          <h2 className={styles.position}>Junior Associate</h2>
          <p className={styles.description}>
            Wania Abbas is a dedicated lawyer currently pursuing her LLB (Hons) degree from the University of London. With over a year of hands-on experience as an Associate at Chaudhary Muhammad Tariq Law Associates (CMT) in Islamabad, she is committed to gaining practical legal knowledge and contributing effectively to complex legal matters within the firm.
            <br /><br />
            Her educational background includes O-Levels from Beaconhouse School System and A-Levels from Benchmark School System. Throughout her internship at CMT Law Associates, Wania has engaged in a variety of tasks, including conducting in-depth legal research on corporate law, contract law, and property law. She has supported the firm in preparing case materials, drafted legal documents such as contracts and briefs, and participated in client meetings, which has improved her communication skills and understanding of client needs.
            <br /><br />
            Wania's role also involved managing case files, tracking deadlines, and coordinating with attorneys to ensure timely submissions. She provided essential administrative support, including scheduling meetings and managing correspondence. Her skills include proficient legal research and writing, strong analytical thinking, and excellent communication abilities. She is skilled in team collaboration and time management, with the ability to prioritize tasks and manage multiple responsibilities efficiently.
            <br /><br />
            Fluent in English, Urdu, Russian, and Punjabi, Wania brings a diverse linguistic capability to her work, enhancing her ability to serve a wide range of clients and navigate complex legal landscapes.
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p>LLB (Hons) | University of London (Ongoing)</p>
        </div>
      </section>
    </div>
  );
}
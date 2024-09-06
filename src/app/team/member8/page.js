import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './member8.module.css';

export default function Member8() {
  return (
    <div className={styles.memberPage}>
      <section className={styles.leftSection}></section>
      <section className={styles.centerSection}>
        <div className={styles.imageContainer}>
          <Image src="/rubah.jpg" alt="Rubah Ahmad" width={210} height={210} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>Rubah Ahmad</h1>
          <h2 className={styles.position}>Junior Associate</h2>
          <p className={styles.description}>
            Rubah Ahmad is a dedicated lawyer with a well-rounded educational and professional background. Her journey in the legal field began with her early education at Army Public School, followed by intermediate studies at Punjab College. She further honed her academic prowess by pursuing an LLB (Hons.) at Bahria University, where she was an active member of the Literary and Debates Society. This involvement not only sharpened her advocacy skills but also enhanced her ability to articulate complex legal arguments and engage in thoughtful discourse.
            <br /><br />
            In her professional career, Rubah has had the privilege of working alongside some of the most accomplished mentors in the legal field. This exposure has greatly expanded her legal knowledge and provided her with practical insights into the nuanced aspects of law. Her experiences have shaped her into a proficient researcher and skilled drafter, allowing her to handle various legal tasks with precision and effectiveness. Rubah's commitment to excellence and her continuous quest for knowledge underscore her dedication to providing high-quality legal services.
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p>LLB (Hons.) | Bahria University</p>
        </div>
      </section>
    </div>
  );
}
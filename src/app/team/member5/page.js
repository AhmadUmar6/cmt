import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './member5.module.css';

export default function Member5() {
  return (
    <div className={styles.memberPage}>
      <section className={styles.leftSection}></section>
      <section className={styles.centerSection}>
        <div className={styles.imageContainer}>
          <Image src="/hb.jpg" alt="Hazrat Bilal" width={210} height={210} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>Hazrat Bilal</h1>
          <h2 className={styles.position}>Associate</h2>
          <p className={styles.description}>
            Hazrat Bilal is a committed and proficient Advocate of District and Session Courts, bringing a robust legal background and a wealth of practical experience to his role. His academic journey is marked by significant achievements, beginning with an LLB (Hons.) from the University of London's External Program. This program equipped him with a comprehensive understanding of law and honed his analytical and legal skills.
            <br /><br />
            Before embarking on his legal education, Hazrat Bilal laid a strong foundation with his Higher Secondary School Certificate (HSSC) from Islamia College Quetta. His secondary education was completed at Abbottabad Hill Crest School. This academic progression reflects his long-standing commitment to educational excellence and his dedication to the legal field from an early age.
            <br /><br />
            In his professional capacity, Hazrat Bilal has garnered substantial experience in handling a wide array of legal matters. His expertise encompasses managing cases related to civil, criminal, contract, and services law. He is adept at drafting and reviewing various commercial documents, including agreements, powers of attorney, and loan documents. His role also involves preparing detailed legal opinions, appeals, and writ petitions, demonstrating his capability to address complex legal issues with precision and thoroughness.
            <br /><br />
            Hazrat Bilal's involvement in the legal community extends beyond his practice. He is an active member of several prominent legal organizations, reflecting his engagement with the broader legal landscape. He holds active membership in the Gulistan Lawyers Forum, where he contributes to discussions and initiatives aimed at advancing legal practice and justice. Additionally, he is a member of the Islamabad Bar Association and the Gulistan Bar Council (Quetta), affiliations that underscore his dedication to maintaining high professional standards and staying abreast of developments in the legal field.
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p>LLB (Hons.) | University of London's External Program</p>
          <p>HSSC | Islamia College Quetta</p>
        </div>
      </section>
    </div>
  );
}
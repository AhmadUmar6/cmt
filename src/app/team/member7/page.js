import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './member7.module.css';

export default function Member7() {
  return (
    <div className={styles.memberPage}>
      <section className={styles.leftSection}></section>
      <section className={styles.centerSection}>
        <div className={styles.imageContainer}>
          <Image src="/hf.jpg" alt="Muhammad Ahsan Fiaz" width={210} height={210} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>Muhammad Ahsan Fiaz</h1>
          <h2 className={styles.position}>Associate</h2>
          <p className={styles.description}>
            Muhammad Ahsan Fiaz is a dedicated Advocate of District and Session Courts with a strong foundation in law and a proven track record of handling a diverse range of legal matters. He has a distinguished educational background, earning a Master's in International Law (LLM) from Birmingham City University, UK, and a Bachelor of Laws (LLB) from BPP University, London.
            <br /><br />
            Ahsan has exceptional competency in drafting legal documents, including case briefs and court applications. He manages client appointments, reviews relevant laws, and provides informed legal advice based on the nature of each case. His responsibilities also encompass client communications and document handling. His proficiency in these areas reflects his strong organizational skills, analytical capabilities, and time management.
            <br /><br />
            Muhammad Ahsan Fiaz is also recognized for his involvement in significant international forums. He has represented Pakistan as a delegate at the Future We Want Model United Nations Conference held at the United Nations Headquarters in New York and at the Change the World Model United Nations Conference, further showcasing his commitment to global legal and diplomatic issues.
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p>LLM (International Law) | Birmingham City University, UK</p>
          <p>LLB | BPP University, London</p>
        </div>
      </section>
    </div>
  );
}
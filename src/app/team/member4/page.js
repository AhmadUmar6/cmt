import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './member4.module.css';

export default function Member4() {
  return (
    <div className={styles.memberPage}>
      <section className={styles.leftSection}></section>
      <section className={styles.centerSection}>
        <div className={styles.imageContainer}>
          <Image src="/bi.jpg" alt="Barrister Ismavia Abbasi" width={210} height={210} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>Barrister Ismavia Abbasi</h1>
          <h2 className={styles.position}>Senior Associate</h2>
          <p className={styles.description}>
            Barrister Ismavia Abbasi is a distinguished legal professional whose academic and professional journey reflects her deep commitment to the pursuit of justice and excellence in law. She holds an LLB Bachelor's degree in Law from the prestigious University of London, where she laid a strong foundation in the principles of law. Further honing her expertise, she pursued her Bar at Law and completed an LLM from the University of the West of England, specializing in Employment and Refugee and Asylum Law. This dual focus has equipped her with a nuanced understanding of complex legal issues, particularly those at the intersection of human rights and employment law.
            <br /><br />
            Barrister Ismavia's professional experience is marked by her time here at Chaudhry Muhammad Tariq Law Associates. She served as an intern for six months before advancing to the role of an associate for a year. During this time, she gained hands-on experience in various aspects of legal practice, from drafting legal documents to representing clients in court. Her work in the field of employment law has been particularly noteworthy, where she has shown a keen ability to navigate the intricate legalities surrounding workplace rights and obligations. Additionally, her involvement in refugee and asylum law underscores her dedication to advocating for vulnerable populations, ensuring that their rights are protected under the law.
            <br /><br />
            Barrister Ismavia's rigorous academic background, coupled with her practical experience, makes her an invaluable asset to our firm. Her ability to combine theoretical knowledge with real-world application allows her to provide comprehensive legal solutions tailored to the unique needs of each client. Whether addressing issues of employment disputes or advocating for the rights of asylum seekers, Barrister Ismavia approaches every case with a blend of compassion, precision, and an unwavering commitment to justice.
            <br /><br />
            At our firm, Barrister Ismavia Abbasi is a key member of our legal team, bringing her expertise, dedication, and a fresh perspective to every case she handles. Her commitment to upholding the rule of law and ensuring fair treatment for all her clients makes her a trusted advisor and a formidable advocate in the legal community. We are proud to have her as part of our team, where she continues to contribute to our mission of providing exceptional legal services with integrity and professionalism.
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p>Bar-at-Law & LLM | University of the West of England</p>
          <p>LLB | University of London</p>
        </div>
      </section>
    </div>
  );
}
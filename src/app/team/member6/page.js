import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './member6.module.css';

export default function Member6() {
  return (
    <div className={styles.memberPage}>
      <section className={styles.leftSection}></section>
      <section className={styles.centerSection}>
        <div className={styles.imageContainer}>
          <Image src="/hbm.jpg" alt="Barrister Hassan Baig Malik" width={210} height={210} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>Barrister Hassan Baig Malik</h1>
          <h2 className={styles.position}>Associate</h2>
          <p className={styles.description}>
            Barrister Hassan Baig Malik is a highly skilled Advocate of District and Session Courts renowned for his expertise in advocacy and drafting precise legal documents, and representing clients across a spectrum of legal proceedings, including trials, hearings, and appeals. His dedication to protecting clients' rights and interests, while steadfastly upholding the principles of justice and fairness, defines his practice.
            <br /><br />
            His educational background reflects a commitment to legal excellence and continuous learning. Barrister Malik earned his Bar at Law from BPP University, London, where he completed his professional legal studies. His foundational legal education includes an LLB from the University of London and a Certificate of Higher Education in Common Law from the same institution. These qualifications underpin his extensive knowledge of contract law, exceptional research skills, and a thorough understanding of local court procedures and litigation support.
            <br /><br />
            Barrister Malik's professional journey includes valuable experience with Zamir & Malik, a prominent law firm in Karachi, where he served as an Associate. He has exceptional skills in responding to inquiries, delivering general legal advice, and determining strategic next steps for various cases. His is involved in verifying the authenticity of legal paperwork, drafting and negotiating contracts, and providing comprehensive support on issues related to Services Law and Contract Law. He was also responsible for managing tight deadlines and ensuring effective case management, reviewing and analyzing litigation files, and conducting in-depth legal research through online sources and legal databases.
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p>Bar at Law | BPP University, London</p>
          <p>LLB | University of London</p>
          <p>Certificate of Higher Education in Common Law | University of London</p>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './member9.module.css';

export default function Member9() {
  return (
    <div className={styles.memberPage}>
      <section className={styles.leftSection}></section>
      <section className={styles.centerSection}>
        <div className={styles.imageContainer}>
          <Image src="/ali.jpg" alt="Ali Faraz Bhatti" width={210} height={210} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>Ali Faraz Bhatti</h1>
          <h2 className={styles.position}>Junior Associate</h2>
          <p className={styles.description}>
            Ali Faraz Bhatti is a legal professional with a diverse and extensive background in law. He earned his BA LLB (Hons) with high merits from the Lahore University of Management Sciences (LUMS), following his Cambridge International A Levels and O Levels from Beaconhouse Margalla Campus (BMI).
            <br /><br />
            At the Federal Prosecutor General Office, Ali worked as a Criminal lawyer representing the state in District, Session and High Courts. His responsibilities included handling multiple FIRs, interacting daily with Investigating Officers, and gaining an expert understanding of the Federal Criminal System, from Police Stations to Courts. His role also involved assisting the Prosecutor General in cases before the Supreme Court and the Federal Shariat Court, providing him with invaluable experience in high-stakes legal environments.
            <br /><br />
            Ali's expertise also extends to securities law, having served as a Legal Associate at the Securities and Exchange Commission of Pakistan (SECP). There, he provided expert legal counsel, ensured compliance with laws and regulations, and conducted research on emerging issues, including internet domain laws. His role involved drafting and reviewing contracts and legal documents, ensuring precision and adherence to legal standards.
            <br /><br />
            In addition to his work with the SECP, Ali has experience in corporate law through his tenure at the prestigious HaiderMota & Co. Law Firm, where he handled corporate consultations and contract drafting. His background also includes legal writing, having worked with the Personal Injury Centre, a firm based out of California, to create compelling articles aimed at attracting clients and enhancing the firm's online presence.
            <br /><br />
            Ali's editorial skills were honed as part of the Editorial Team for the LUMS Law Journal, where he managed the editorial process for one of Pakistan's leading legal academic journals. His academic contributions include papers on Tort Law and Domain Regulation Law. Ali also served as a Research Specialist with the World Wide Fund for Nature (WWF), focusing on addressing plastic pollution in Pakistan through strategic marketing campaigns.
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p>BA LLB (Hons) | Lahore University of Management Sciences (LUMS)</p>
        </div>
      </section>
    </div>
  );
}
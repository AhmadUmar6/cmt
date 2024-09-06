import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './member1.module.css';

export default function Member1() {
  return (
    <div className={styles.memberPage}>
      <section className={styles.leftSection}></section>
      <section className={styles.centerSection}>
        <div className={styles.imageContainer}>
          <Image src="/cmt.jpg" alt="Member Image" width={210} height={210} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>Justice (R) Chaudhry Muhammad Tariq</h1>
          <h2 className={styles.position}>Founding Partner</h2>
          <p className={styles.description}>
            Chaudhry Muhammad Tariq is a distinguished Advocate Supreme Court of Pakistan with a wealth of experience in both judicial and legal advisory roles. He holds an LLB from Punjab University (PU) and has furthered his expertise with a specialization in WTO law from Bern University, Switzerland.
            <br /><br />
            Following his education, Chaudhry Muhammad Tariq served as a Judge at the Lahore High Court, where he presided over numerous landmark cases. His extensive career includes serving as an Advocate in the Supreme Court of Pakistan and holding the position of Professor of Law at Punjab Law College, where he has been a significant influence on the next generation of legal professionals.
            <br /><br />
            Chaudhry Muhammad Tariq has held several key leadership roles, including former President of the High Court Bar and Member of the Punjab Bar Council. His contributions to the legal community extend to high-profile government positions, such as Additional Prosecutor General for Punjab and Deputy Attorney General for Pakistan.
            <br /><br />
            In addition to his judicial and government roles, Chaudhry Muhammad Tariq has served as a Judicial Member of the Anti-Dumping Appellate Tribunal and held chairmanships at various tribunals, including the Pakistan Custom Appellate Tribunal, Punjab Labor Appellate Tribunal, and the Appellate Commission of the Lahore Development Authority.
            <br /><br />
            Throughout his distinguished career, Chaudhry Muhammad Tariq has been involved in a broad spectrum of legal issues, from constitutional and administrative matters to complex commercial and regulatory disputes. His extensive experience and leadership in various capacities reflect his deep commitment to the legal profession and his significant contributions to the legal landscape of Pakistan.
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p>LLB | Punjab University (PU)</p>
          <p>Specialization in WTO law | Bern University, Switzerland</p>
        </div>
      </section>
    </div>
  );
}

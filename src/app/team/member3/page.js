import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './member3.module.css';

export default function Member3() {
  return (
    <div className={styles.memberPage}>
      <section className={styles.leftSection}></section>
      <section className={styles.centerSection}>
        <div className={styles.imageContainer}>
          <Image src="/new.JPG" alt="Member Image" width={210} height={210} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>Muhammad Taimur Khan</h1>
          <h2 className={styles.position}>Advocate High Court</h2>
          <p className={styles.description}>
            Muhammad Taimur Khan is an Advocate High Court and a seasoned legal professional with extensive experience and expertise across multiple areas of law. He has previously served as a Partner at Muhammad Iqbal Khan Mohmand Law Associates in Peshawar.
            <br /><br />
            Taimur Khan's legal journey began with his enrollment as an Advocate in District and Session Courts in 2013, followed by his enrolment as an Advocate in the High Court in 2016. His professional experience is marked by significant roles in both public and private sectors. He has served as a State Counsel at the Advocate General Office in Khyber Pakhtunkhwa, where he appeared in numerous state cases, including appeals, revisions, and writs at the Peshawar High Court. Prior to this role, he worked as a Legal Assistant to the Deputy Attorney General for Pakistan.
            <br /><br />
            Taimur has been serving as a Legal Officer for Top City-1 Housing Society and The Centaurus Mall & Taj Residencia, both in Islamabad. His advisory contributions extend to Shazal's Pharmaceuticals, Health Berry Pharmaceuticals, Alternate Energy Systems (AES), Haier & Ruba Company, Pakistan, and Peshawar Zalmi Cricket Club. His engagement with these diverse clients demonstrates his proficiency in navigating complex legal landscapes and delivering comprehensive legal solutions.
            <br /><br />
            In addition to his professional roles, Taimur is an active member of several esteemed legal organizations, including the FATA Lawyers Forum, the Honorable Society of Lincoln's Inn in the UK, the Khyber Pakhtunkhwa Bar Council, and the Islamabad & Peshawar Bar Associations. These affiliations reflect his commitment to maintaining high standards in legal practice and staying abreast of developments in the legal field.
          </p>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p>LLB (Hons.) | University of London's External Program (2016-2018)</p>
          <p>Bachelor of Laws (LLB) | University of Peshawar (2008-2011)</p>
          <p>Bachelor of Arts (BA) | Edwardes College, Peshawar (2006-2008)</p>
        </div>
      </section>
    </div>
  );
}
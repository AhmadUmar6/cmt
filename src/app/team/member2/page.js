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
          <Image src="/st.jpg" alt="Shaharyar Tariq" width={210} height={210} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.name}>Shaharyar Tariq</h1>
          <h2 className={styles.position}>Founding Partner</h2>
          <div className={styles.description}>
            <p>
              Shaharyar Tariq is the esteemed Founding Partner of Chaudhry Muhammad Tariq Law Associates. As an Advocate of the Supreme Court of Pakistan, Shaharyar has accumulated over 15 years of diverse legal experience. He began his career in 2009, when he was enrolled in the lower courts, progressing swiftly to the High Court in 2011. His sharp legal acumen and dedication to the profession have seen him rise to prominence, representing clients in high-stakes cases before the Supreme Court, High Courts, District Courts, arbitration tribunals, and other judicial forums across Pakistan. Throughout his career, Shaharyar has successfully navigated complex legal landscapes, offering his expertise in contentious and non-contentious matters alike.
            </p>
            <br />
            <p>
              Shaharyar's academic credentials are equally impressive. He holds an International Arbitration Certfication from University of Leiden, Holland and an LL.M. in International Commercial Law from the prestigious University of Leicester, United Kingdom. He completed his LL.B. from the University of the Punjab, Lahore, Pakistan. His foundational education includes a B.Com and I.Com from the University of Punjab, Lahore, solidifying his comprehensive understanding of both legal and commercial frameworks. His legal prowess is further highlighted by his involvement in several key reported judgments, including 2018 YLR 29 (Arbitration), 2019 PLC (CS) 541 Islamabad, and 2020 PCRLJ 1084 Lahore, to name a few. His extensive knowledge of corporate governance, commercial banking laws, arbitration, and constitutional law has been pivotal in his success as a leading lawyer in Pakistan.
            </p>
            <br />
            <p>
              In his role as as a Founding Partner at Chaudhry Muhammad Tariq Law Associates, Shaharyar provides expert legal guidance to a wide array of clients, including government bodies and private corporations. Notably, he serves as the legal advisor to the Capital Development Authority (CDA), Pak Gulf Construction (Pvt) Ltd. (Centaurus Group), Top City-1, and numerous other high-profile clients. His legal consultations cover a broad spectrum of industries, addressing intricate issues in corporate governance, commercial law, and constitutional disputes. Shaharyar's ability to blend legal theory with practical solutions has made him a sought-after consultant for clients facing complex legal challenges.
            </p>
            <br />
            <p>
              Shaharyar's areas of practice extend beyond corporate and commercial law and encompass litigation services, arbitration, and institutional consultancy. He has represented clients in a wide range of cases, advocating for them in corporate disputes, civil matters, and constitutional issues. His commitment to justice and fair representation is evident in his strategic approach to resolving disputes, whether through litigation or alternative dispute resolution mechanisms such as arbitration. His deep understanding of Pakistan's legal system, combined with his sharp analytical skills, allows him to navigate legal complexities with precision and foresight.
            </p>
            <br />
            <p>
              Apart from his impressive professional career, Shaharyar is an active participant in the legal community. He has contributed to various conferences, seminars, and lectures, particularly on human rights protection, arbitration law, and corporate governance. His involvement in these events demonstrates his commitment to staying at the forefront of legal developments and contributing to the broader legal discourse in Pakistan. He has is a part of seminars organized by the Human Rights Commission of Pakistan, the Law and Parliamentary Affairs Department of Punjab, and the Rawalpindi Bar Association, where he has shared his insights on contemporary legal issues.
            </p>
            <br />
            <p>
              Shaharyar is also an active member of several national and international legal organizations, including the Monthly Research Cell Newsletters (Law Section) at the Lahore High Court and the Research Law Section at the Islamabad High Court. His dedication to research and legal scholarship is reflected in his memberships at the Quaid-e-Azam Library in Lahore and the Punjab Public Library, where he continues to engage with the latest legal literature and advancements.
            </p>
            <br />
            <p>
              Shaharyar's journey as a legal professional is marked by his ambition, dedication, and commitment to excellence. His leadership at Chaudhry Muhammad Tariq Law Associates has not only upheld the firm's distinguished legacy but has also expanded its reach and impact in the legal sphere. His unwavering commitment to providing top-tier legal services, combined with his depth of knowledge and experience, makes him a leading figure in Pakistan's legal landscape.
            </p>
            <br />
            <p>
              Through his work, Shaharyar Tariq continues to influence and shape the future of legal practice in Pakistan, offering strategic counsel and advocacy to clients while fostering a culture of integrity, professionalism, and innovation within the firm.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.education}>
          <h3>Education</h3>
          <p>LL.M. International Commercial Law | University of Leicester, United Kingdom</p>
          <p>International Arbitration Certification | University of Leiden, Holland</p>
          <p>LL.B. | University of the Punjab, Lahore, Pakistan</p>
          <p>B.Com | University of Punjab, Lahore, Pakistan</p>
          <p>I.Com | University of Punjab, Lahore, Pakistan</p>
        </div>
      </section>
    </div>
  );
}
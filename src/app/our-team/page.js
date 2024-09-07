'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './team.module.css';

const teamMembers = [
  {
    name: 'Justice (R) Chaudhary Muhammad Tariq',
    position: 'Founding Partner',
    imagePath: '/cmt.jpg',
    profileLink: '/team/member1',
  },
  {
    name: 'Shaharyar Tariq',
    position: 'Founding Partner',
    imagePath: '/st.jpg',
    profileLink: '/team/member2',
  },
  {
    name: 'Muhammad Taimur Khan',
    position: 'Senior Associate',
    imagePath: '/new.JPG',
    profileLink: '/team/member3',
  },
  {
    name: 'Barrister Ismavia Abbasi',
    position: 'Senior Associate',
    imagePath: '/bi.jpg',
    profileLink: '/team/member4',
  },
  {
    name: 'Hazrat Bilal',
    position: 'Associate',
    imagePath: '/hb.jpg',
    profileLink: '/team/member5',
  },
  {
    name: 'Barrister Hassan Baig Malik',
    position: 'Associate',
    imagePath: '/hbm.jpg',
    profileLink: '/team/member6',
  },
  {
    name: 'Rubah Ahmad',
    position: 'Junior Associate',
    imagePath: '/rubah.jpg',
    profileLink: '/team/member8',
  },
  {
    name: 'Ali Faraz Bhatti',
    position: 'Junior Associate',
    imagePath: '/ali.jpg',
    profileLink: '/team/member9',
  },
  {
    name: 'Wania Abbas',
    position: 'Junior Associate',
    imagePath: '/wab.jpg',
    profileLink: '/team/member10',
  },
];

export default function OurTeam() {
  const [searchName, setSearchName] = useState('');

  const filteredMembers = teamMembers.filter(
    member =>
      member.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className={styles.ourTeamPage}>
      <section className={styles.heroSection}>
        <Image
          src="/cmt3.jpg"
          alt="Hero Image"
          fill
          style={{ objectFit: 'cover' }}
          quality={100} 
          priority={true}
          loading="eager"
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1>Legal Excellence.</h1>
          <p>Proven Results.</p>
        </div>
      </section>

      <section className={styles.searchSection}>
        <input
          type="text"
          placeholder="NAME"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button>SEARCH</button>
        <a onClick={() => { setSearchName(''); }}>RESET FILTER</a>
      </section>

      <section className={styles.teamSection}>
        <h2>MEET OUR TEAM</h2>
        <div className={styles.teamGrid}>
          {filteredMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.cardImageContainer}>
                <Image src={member.imagePath} alt="Member Image" width={150} height={150} />
              </div>
              <div className={styles.cardTextContainer}>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <Link href={member.profileLink}>Full Profile</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

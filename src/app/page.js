'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { FaServicestack, FaArrowRight } from 'react-icons/fa';
import { FaLaptop, FaGavel, FaHandshake, FaBriefcase, FaUserShield, FaNotesMedical, FaChevronRight } from 'react-icons/fa';
import Maps from '../components/Maps';
import styles from './page.module.css';

const services = [
  { icon: <FaBriefcase />, title: 'Corporate & Business Law', description: 'At CH.M.T Law we offer consultations to firms of all sizes and natures regarding the complex framework of modern business.' },
  { icon: <FaLaptop />, title: 'Commercial Law', description: 'Our advocates are well-versed in the legal framework that regulates commercial dealings and activities.' },
  { icon: <FaGavel />, title: 'Criminal Law', description: 'Whether you have been charged with a serious or minor offense, we are there to protect your legal rights and ensure that you are properly represented.' },
  { icon: <FaHandshake />, title: 'Family Law', description: 'We actively practice family law which relates to marriage, divorce, adoption, child custody, and other matters involving family relationships.' },
  { icon: <FaUserShield />, title: 'Employment Laws', description: 'We help government and private firms understand and follow the employment laws to avoid infringement of legal rights.' },
  { icon: <FaNotesMedical />, title: 'Personal Injuries & Insurance Law', description: 'We seek in-depth knowledge of the events to help you understand your rights and discuss ways to claim entitled compensation.' },
];

const Section = ({ children, className = '' }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`${styles.section} ${className}`}
  >
    {children}
  </motion.section>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    scrollYProgress.onChange(latest => {
      if (header) {
        header.style.opacity = 1 - latest * 5;
        header.style.transform = `translateY(${latest * 50}px)`;
      }
    });
  }, [scrollYProgress]);

  const handleFlip = (index) => {
    const tile = document.querySelector(`#tileInner${index}`);
    tile.classList.toggle(styles.flipped);
  };

  return (
    <div className={styles.container}>
      <header ref={headerRef} className={styles.header}>
        <Image 
          src="/leather4.png" 
          alt="Background" 
          fill
          style={{ objectFit: 'cover' }}
          quality={80} 
          priority={true}
          loading="eager"
        />
        <div className={styles.heroText}>
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.headerTitle}
          >
            CMT Advocates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={styles.headerSubtitle}
          >
            Empowering your rights with experienced, strategic, and innovative legal solutions.
          </motion.p>
        </div>
      </header>

      <Section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.leftBox}>
            <h2 className={styles.sectionTitle2}>We aspire to provide practical, comprehensive, and timely legal services that meet our clients' needs.</h2>
            <Link href="/the-firm" className={styles.readMoreLink}>
              Read More <FaChevronRight />
            </Link>
          </div>
          <div className={styles.rightText}>
            <p>Our commitment to excellence and deep understanding of Pakistani law makes us the go-to firm for complex legal matters. We pride ourselves on our ability to navigate the intricacies of the legal system while maintaining the highest ethical standards.</p>
          </div>
        </div>
      </Section>

      <Section className={styles.servicesSection}>
        <div className={styles.headingContainer}>
          <FaServicestack className={styles.headingIcon} />
          <h2 className={styles.heading}>Our Services</h2>
        </div>
        <div className={styles.serviceContainer}>
          {services.map((service, index) => (
            <div key={index} className={styles.tile} onClick={() => handleFlip(index)}>
              <div id={`tileInner${index}`} className={styles.tileInner}>
                <div className={styles.tileFront}>
                  <div className={styles.icon}>{service.icon}</div>
                  <h3 className={styles.title}>{service.title}</h3>
                </div>
                <div className={styles.tileBack}>
                  <p className={styles.description}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
          <Link href="/practice-areas" className={styles.iconButton}>
            <FaChevronRight />
          </Link>
        </div>
      </Section>

      <Section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionText}>
            You can visit our office and we'd love to serve you at your convenience.
          </p>
        </div>
        <Maps />
      </Section>
    </div>
  );
}

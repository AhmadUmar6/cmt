import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGavel, faChartLine, faMapSigns, faCalculator } from '@fortawesome/free-solid-svg-icons';
import styles from './OurJourney.module.css';

export default function OurJourney({ scrollToSection }) {
  const [activeSection, setActiveSection] = useState('');

  const handleNavigation = (section) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  const services = [
    { icon: faBriefcase, name: 'Business Start Up Mentoring' },
    { icon: faGavel, name: 'Providing Legal Services' },
    { icon: faChartLine, name: 'Management Consulting and Coaching' },
    { icon: faMapSigns, name: 'Strategic Planning Mentoring' },
    { icon: faCalculator, name: 'Budgeting' }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.container}>
      <div className={styles.navTiles}>
        <button
          className={activeSection === 'ourJourney' ? styles.active : ''}
          onClick={() => handleNavigation('ourJourney')}
        >
          About Us
        </button>
        <button
          className={activeSection === 'ourClients' ? styles.active : ''}
          onClick={() => handleNavigation('ourClients')}
        >
          Our Clients
        </button>
      </div>
      <motion.div className={styles.ourJourney}>
        <h2>About Us</h2>
        <p>
          Established in 1973 by Ch. Muhammad Tariq, CH. MUHAMMAD TARIQ LAW ASSOCIATES has grown from a distinguished law firm into a comprehensive provider of legal, financial, and business consulting services. With a foundation in civil and criminal law, we have expanded to offer expertise in corporate affairs, financial consultancy, internal audits, valuation, economic consulting, and bookkeeping.
        </p>
        <p>
          Our mission is to transform legal, financial, and accounting outsourcing into strategic business solutions. We cater to the Pakistani market with a diverse range of services, aiming to support our clients' growth and success.
        </p>
        <div className={styles.services}>
          {services.map((service, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={styles.serviceItem}
              key={index}
            >
              <FontAwesomeIcon icon={service.icon} className={styles.serviceIcon} />
              <div className={styles.serviceName}>{service.name}</div>
            </motion.div>
          ))}
        </div>
        <p>
          At CH. MUHAMMAD TARIQ LAW ASSOCIATES, we pride ourselves on our highly educated and well-trained team, consisting of professionals with qualifications such as CAs, ACMAs, ACCAs, CFAs, MBAs, MCS, Economists, and legal experts. Utilizing state-of-the-art technology, we fuse strategy with results to help our clients thrive in a dynamic business environment.
        </p>
      </motion.div>
    </motion.div>
  );
}

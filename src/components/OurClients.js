import React from 'react';
import styles from './OurClients.module.css';

export default function OurClients() {
  const clients = [
    { name: 'OM International (Pvt.) Ltd.', logo: 'om.png' },
    { name: 'Mediland Pakistan (Pvt) Ltd', logo: 'medi.png' },
    { name: 'JS Bank Ltd', logo: 'js.png' },
    { name: 'Pak Gulf Construction PVT Company', logo: 'pakgulf.png' },
    { name: 'Askari Bank Ltd', logo: 'askari.png' },
    { name: 'Institute of Regenerative Medicine', logo: 'irm.png' },
    { name: 'Silver Oaks Appartment Building', logo: 'silver.png' },
    { name: 'Kidney Center Hospital Rawalpindi', logo: 'kidney.jpg' },
    { name: 'Maroof International Hospital', logo: 'maroof.png' },
    { name: 'Ausaf News / Establishment', logo: 'ausaf.jpg' },
    { name: 'Potohar Builders', logo: 'potohar.png' },
    { name: 'Peace Education foundation', logo: 'peace.jpg' },
    { name: 'NIB Bank Ltd', logo: 'nib.png' },
    { name: 'Pakistan Medical and Dental Council', logo: 'pmdc.png' },
    { name: 'Capital Development Authority (CDA)', logo: 'cda.png' },
    { name: 'Top City-1', logo: 'top.png' }

  ];

  return (
    <div className={styles.ourClients}>
      <h2><i className="fas fa-users"></i> Our Clients</h2>
      <div className={styles.clientGrid}>
        {clients.map((client, index) => (
          <div className={styles.clientTile} key={index}>
            <img src={client.logo} alt={client.name} className={styles.clientLogo} />
            <div className={styles.clientName}>{client.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

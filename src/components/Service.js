// our-services/Service.js
import React, { useState } from 'react';
import {
  FaBriefcase, FaLaptop, FaUsers, FaChartLine,
  FaGavel, FaHandshake, FaBalanceScale, FaHome,
  FaUserShield, FaNotesMedical, FaMedal, FaLandmark,
  FaBook, FaFileContract, FaCogs, FaCalculator,
  FaClipboardList, FaCoins, FaIndustry, FaBuilding,
  FaRegBuilding, FaExchangeAlt, FaFileAlt, FaArchive,
  FaClipboard, FaTasks, FaLaptopCode, FaServicestack, FaArrowRight
} from 'react-icons/fa';
import styles from './Service.module.css';

const services = [
  { icon: <FaBriefcase />, title: 'Corporate & Business Law', description: 'At CH.M.T Law we offer consultations to firms of all sizes and natures regarding the complex framework of modern business. We offer clients the skills and awareness to take negotiations through every stage of the investment lifecycle.' },
  { icon: <FaLaptop />, title: 'Commercial Law', description: 'Our advocates are well-versed in the legal framework that regulates commercial dealings and activities – such as sales, finance, employment, contracts, intellectual property and others. This helps ensure smooth business operations away from legal issues.' },
  { icon: <FaGavel />, title: 'Criminal Law', description: 'Whether you have been charged with a serious or minor offense, we are there to protect your legal rights and ensure that you are properly represented. We engage in a thorough investigation of the events for the prevalence of justice while guaranteeing rational treatment of the suspects, witnesses, defendants, and detainees.' },
  { icon: <FaHandshake />, title: 'Family Law', description: 'We actively practice family law which relates to marriage, divorce, adoption, child custody, and other matters involving family relationships. Understanding the sensitivity of these issues, we deal with them quite professionally and humanely. We also draft court petitions and property documents as required.' },
  { icon: <FaUserShield />, title: 'Employment Laws', description: 'We help government and private firms understand and follow the employment laws to avoid infringement of legal rights and responsibilities of employer and employee and ensure a healthy and fair working environment.' },
  { icon: <FaNotesMedical />, title: 'Personal Injuries & Insurance Law', description: 'Personal injuries can result from different situations and thus involve various laws and regulations. We seek in-depth knowledge of the events to help you understand your rights and discuss ways to claim entitled compensation.' },
  { icon: <FaHome />, title: 'Property Laws', description: 'We make property transactions and development easier and foolproof by conveying the required knowledge and discipline for the process. We protect our clients from frauds and help them with legalities of the process.' },
  { icon: <FaLandmark />, title: 'Constitutional Petitions', description: 'The Constitution is the most difficult yet sovereign area of practice. It helps protect the rights of every citizen, organization, and department against any discrimination arising through the inconsistency of laws or regulations with the Constitution.' },
  { icon: <FaBalanceScale />, title: 'Litigation & Comm. Disputes', description: 'Litigation is the cornerstone of any legal practice, and at CH.M.T Law, we are committed to providing our clients with quick and cost-effective service in commercial dispute resolution. Our priority in litigation is to achieve the best overall result with your interest in mind.' },
  { icon: <FaMedal />, title: 'Medical Negligence', description: 'Medical negligence can take lives and it must be legally dealt with. We help victims of medical negligence get justice and rightful compensations. We also help doctors and medical institutes protect their name and integrity in case of frivolous claims.' },
  { icon: <FaUsers />, title: 'Mediation / Arbitration', description: 'We settle disputes or controversies by setting up retired judges of the High Court between two contending parties in order to aid them in the settlement of their disagreement. The judges listen to both parties and help them reach a fair conclusion.' },
  { icon: <FaGavel />, title: 'Civil Litigation', description: 'A civil litigation attorney will take you through the entire process of filing and pursuing a non-criminal lawsuit. We provide the best attorney to the client, obligated to fight for him to achieve the best possible outcome on the client’s behalf.' },
  { icon: <FaFileContract />, title: 'Banking, Finance, & Securities', description: 'Tariq Law Associate is legal and financial consultant to some of Pakistan’s biggest financial and banking institutions. We assist our clients in structuring financial packages and the preparation of security documents.' },
  { icon: <FaBook />, title: 'Corporate Affairs & Secretarial Practices', description: 'Our client base has expanded greatly due to our excellence in handling the corporate affairs of our valued clients and has made us one of the leading companies in the region in this area as well. We provide services for the formation and establishment of all types of business entities, partnership firms, and corporate bodies.' },
  { icon: <FaCoins />, title: 'Corporate Finance', description: 'We have a team of professionals who help clients with arranging loans for new and existing business units from various banks. We also assist in asset leasing and hypothecation of stock and advise on corporate structuring.' },
  { icon: <FaCogs />, title: 'Management Consultancy', description: 'We provide a wide range of management consultancy and advisory services which goes beyond what is offered by traditional consultants. Our experts come from a variety of financial and business backgrounds which gives them an edge over others in evaluating the current situation of the business for better forecasting, planning, and strategy development.' },
  { icon: <FaBuilding />, title: 'Operational Agreements', description: 'We take care of operation and maintenance agreements for high-rise buildings, societies, and complexes. We are the only firm providing the agreement facility between utility supply companies and the concerned community development party.' },
  { icon: <FaClipboardList />, title: 'Estate Admin. & Planning', description: 'Our team is highly experienced in dealing with the creation of wills and power of attorney, and the administration of estate. Our team will work with you and evaluate relevant issues and inform you of the legal options available to you.' },
  { icon: <FaClipboard />, title: 'Leasing', description: 'Entering into the legal binding of a lease as a landlord or tenant is an important and sometimes complex requirement for leasing or acquiring premises. CH.M.T Law handles any leasing matter quite diligently ensuring a smooth transaction.' },
  { icon: <FaRegBuilding />, title: 'Property Development', description: 'At CH.M.T Law we pride ourselves on our unique knowledge and expertise in the field of property development. Our team has been working with developers within the region and has established ourselves as one of the leading firms in Pakistan.' },
  { icon: <FaExchangeAlt />, title: 'Leaders In Conveyancing', description: 'At CH.M.T Law our expert Conveyancing Lawyers can assist you with all matters relating to buying and selling of residential property. We provide legal services for all the relevant parties including owners, developers, and investors.' },
  { icon: <FaFileAlt />, title: 'Business Contract', description: 'Selling or buying a business can be a challenging and time-consuming procedure. CH.M.T Law provides reassurance for either your sale or purchase of a business and covers all areas from pre-contract formation to the end of the process.' },
  { icon: <FaClipboardList />, title: 'Agreements & Policies Drafting', description: 'Our associate lawyers have outstanding knowledge and experience in drafting various kinds of agreements such as non-disclosure agreements, vendor contracts, supply agreements, software license agreements and office leases, MOUs, etc.' },
  { icon: <FaArchive />, title: 'Economic Consulting', description: 'Our experts are dedicated to applying economic, financial and quantitative principles to complex business and regulatory challenges. For nearly half a year, our economists have been creating strategies, studies, reports, expert testimony and policy recommendations for government authorities, law firms and corporations.' },
  { icon: <FaCalculator />, title: 'Tax Consultancy', description: 'We provide a full range of taxation services. Our approach is to ensure that you get the most advantageous treatment under the law while complying with the complex requirements of tax statutes and regulations. As consultants, we advise on various aspects of business operations to provide a full range of tax services, including all aspects of sales tax and income tax laws.' },
  { icon: <FaIndustry />, title: 'Companies Registration', description: 'We register trademarks for individuals and organizations to protect their business identity. We also register companies under the companies ordinance in SECP as well as before the registrar of firms in a professional style.' },
  { icon: <FaClipboard />, title: 'Special Audits & Investigations', description: 'Due to our extensive experience in financial investigations and objective reporting, we have been many times entrusted both by our clients and other organizations for detailed financial investigations and special audit assignments to unearth the embezzlements and frauds, which we have completed very successfully.' },
  { icon: <FaTasks />, title: 'Internal Audit', description: 'Our professional approach to internal auditing involves modern techniques for independent and objective assessment of an organization to evaluate governance, control and management. We have earned the respect and recognition of the financial and business community of Pakistan for our reliable internal audit services over the years.' },
  { icon: <FaClipboardList />, title: 'Bookkeeping & Accounting', description: 'For bookkeeping and accountancy, we have developed computerized accounting packages suitably adaptable to various types of businesses and clients’ needs. As part of the service, we prepare and provide the books of accounts consisting of cash book, general ledger, sub-ledgers of sales, purchases, debtors and creditors, balance sheet and profit & loss account.' },
  { icon: <FaLaptopCode />, title: 'Information Technology Needs', description: 'We provide services relating to Information Technology (IT) such as computer audits, feasibility studies, requirement analysis, and software development, assistance in acquiring hardware and software from vendors, and review analysis of existing computer-based systems.' },
];

export default function Service() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className={styles.serviceSection}>
      <div className={styles.headingContainer}>
        <FaServicestack className={styles.headingIcon} />
        <h1 className={styles.heading}>Our Services</h1>
      </div>
      <div className={styles.serviceContainer}>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.tile} ${flippedIndex === index ? styles.flipped : ''}`}
            onClick={() => handleFlip(index)}
          >
            <div className={styles.tileInner}>
              <div className={styles.tileFront}>
                <div className={styles.icon}>{service.icon}</div>
                <h2 className={styles.title}>{service.title}</h2>
                <FaArrowRight className={styles.arrowIcon} />
              </div>
              <div className={styles.tileBack}>
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

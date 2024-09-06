import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_mh5mmto';
    const templateID = 'template_1rsa53c';
    const userID = 'XwCC8PSZN8_HLzYZA';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true);
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formText}>
        <h2 className={styles.formTitle}>CONTACT US</h2>
        <p className={styles.formSubtitle}>Email, call or visit our offices in Islamabad.</p>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <textarea
          name="message"
          placeholder="Type your message here."
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>Send Message</button>
      </form>

      {isSent && <p className={styles.successMessage}>Message sent successfully!</p>}
    </div>
  );
}

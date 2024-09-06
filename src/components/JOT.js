import styles from './JOT.module.css';

const JOT = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Join Our Team</h1>
          <p className={styles.description}>
            We’re on the lookout for talented professionals who are passionate 
            about making a difference. Submit your application and let’s build 
            the future together.
          </p>
        </div>
        <div className={styles.applyContainer}>
          <a
            href="https://forms.gle/2QgVhzzFzyQwDnMw8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.applyButton}
          >
            Submit Your Application
          </a>
          <p className={styles.applyText}>
            Click the button above to fill out the form and upload your CV. We’re excited to see what you can bring to our team!
          </p>
        </div>
      </div>
    </div>
  );
};

export default JOT;

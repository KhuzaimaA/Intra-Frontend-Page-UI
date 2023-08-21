import React from "react";
import styles from "../../../../styles/About/JoinUs/JoinUsForm.module.css";
import font from "../../../../styles/Fonts.module.css";
import HorizontalLines from "../../Lines";

const JoinUsForm = ({ onClose }) => {
  const handleBlurClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.popupContainer} onClick={handleBlurClick}>
      <div className={styles.popupContent}>
        <p className={font.blueTaglineShort}>Apply Now:</p>
        <HorizontalLines />
        <form className={styles.formContainer}>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <input type="text" placeholder="Name" />
            </div>
            <div className={styles.formField}>
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <input type="tel" placeholder="Phone number" />
            </div>
            <div className={styles.formField}>
              <input type="text" placeholder="Academic Qualification" />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <input type="text" placeholder="Major" />
            </div>
            <div className={styles.formField}>
              <input type="number" placeholder="Years of Experience" />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <textarea placeholder="Message"></textarea>
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinUsForm;

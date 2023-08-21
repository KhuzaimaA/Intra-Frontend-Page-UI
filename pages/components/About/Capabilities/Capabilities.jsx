import React from "react";
import styles from "../../../../styles/About/Capabilities/Capabilities.module.css";
import font from "../../../../styles/Fonts.module.css";
import HorizontalLines from "../../Lines";

const Capabilities = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.headings}>
      <h1 className={`${font.greenHeading} ${styles.Heading1}`}>Capabilities</h1>
        <h1 className={`${font.blueTagline} ${styles.Heading2}`}>Complete UAS Mastery </h1>
      <HorizontalLines/>
      </div>
      <div className={styles.circleContainer}>
      <h1 className={`${font.greenHeading} ${styles.centerText1}`}>UAS</h1>
        <h1 className={`${font.blueTagline} ${styles.centerText2}`}>360°</h1>
        <h1 className={`${font.blueTagline} ${styles.operation}`}>Operations</h1>
        <h1 className={`${font.blueTagline} ${styles.engineering}`}>Engineering</h1>
        <h1 className={`${font.blueTagline} ${styles.maintainence}`}>Maintainence</h1>
        <h1 className={`${font.blueTagline} ${styles.design}`}>
        Design &<br />
        Development
      </h1>
        <h1 className={`${font.blueTagline} ${styles.training}`}>Training</h1>
        <h1 className={`${font.blueTagline} ${styles.manufacturing}`}>Manufacturing</h1>
        <div className={`${styles.borderContainer} ${styles.top}`} />
        <div className={`${styles.borderContainer} ${styles.right}`} />
        <div className={`${styles.borderContainer} ${styles.bottom}`} />
        <div className={`${styles.borderContainer} ${styles.left}`} />
        <div className={`${styles.borderContainer} ${styles.bottomleft}`} />
        <div className={`${styles.borderContainer} ${styles.leftright}`} />
        <div className={`${styles.borderContainer} ${styles.right}`}>
          {/* Icon */}
          {/* <img src={icon} alt={styles.icon} /> */}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;

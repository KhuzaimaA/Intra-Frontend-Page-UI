import React from "react";
import styles from "../../../../styles/About/IntraInNumbers/AboutCircleLayout.module.css";
import font from "../../../../styles/Fonts.module.css";

const CircleLayout = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.circleContainer}>
        <h1 className={`${font.greenHeading} ${styles.heading}`}>INTRA</h1>
        <h1 className={`${font.blueTagline} ${styles.heading2}`}>In Numbers</h1>
        <div className={`${styles.borderContainer} ${styles.top}`}>
          <div className={styles.rightColumn}>
            <div className={styles.topLeft}>Manufacturing Capacity</div>
            <div className={styles.buttonLeft}>278+ Yearly </div>
          </div>
          <div className={styles.topRight}>
            Icon
            {/* <img src={icon} alt={styles.icon} /> */}
          </div>
        </div>
        <div className={`${styles.borderContainer} ${styles.right}`}>
          <div className={styles.rightColumn}>
            <div className={styles.topLeft}>Flight Hours</div>
            <div className={styles.buttonLeft}>21+ Daily Hours </div>
          </div>
          <div className={styles.topRight}>
            Icon
            {/* <img src={icon} alt={styles.icon} /> */}
          </div>
        </div>
        <div className={`${styles.borderContainer} ${styles.bottom}`}>
          <div className={styles.rightColumn}>
            <div className={styles.topLeft}>UAV Training Hours</div>
            <div className={styles.buttonLeft}>68,000+</div>
          </div>
          <div className={styles.topRight}>
            Icon
            {/* <img src={icon} alt={styles.icon} /> */}
          </div>
        </div>
        <div className={`${styles.borderContainer} ${styles.left}`}>
          <div className={styles.rightColumn}>
            <div className={styles.topLeft}>Founded In</div>
            <div className={styles.buttonLeft}>2013</div>
          </div>
          <div className={styles.topRight}>
            Icon
            {/* <img src={icon} alt={styles.icon} /> */}
          </div>
        </div>
        <div className={`${styles.borderContainer} ${styles.topleft}`}>
          <div className={styles.rightColumn}>
            <div className={styles.topLeft}>Development Hours</div>
            <div className={styles.buttonLeft}>600,000+ </div>
          </div>
          <div className={styles.topRight}>
            Icon
            {/* <img src={icon} alt={styles.icon} /> */}
          </div>
        </div>
        <div className={`${styles.borderContainer} ${styles.topRight}`}>
          <div className={styles.rightColumn}>
            <div className={styles.topLeft}>Engineering Projects</div>
            <div className={styles.buttonLeft}>5+</div>
          </div>
          <div className={styles.topRight}>
            Icon
            {/* <img src={icon} alt={styles.icon} /> */}
          </div>
        </div>
        <div className={`${styles.borderContainer} ${styles.bottomLeft}`}>
          <div className={styles.rightColumn}>
            <div className={styles.topLeft}>Development Projects</div>
            <div className={styles.buttonLeft}>5+</div>
          </div>
          <div className={styles.topRight}>
            Icon
            {/* <img src={icon} alt={styles.icon} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleLayout;

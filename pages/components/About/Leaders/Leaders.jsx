import React from "react";
import styles from "../../../../styles/About/Leaders/Leaders.module.css";
import font from "../../../../styles/Fonts.module.css"
import HorizontalLines from "../../Lines";
import LeaderImageScroll from "./ImageScroller";
const Leaders = () => {
  return (
    <div className={styles.mainLeaderContainer}>
      <div className={styles.leaderContainer}>
        <div className={styles.leaderContainerLeft}>
          <p className={font.greenHeading}>The Team</p>
          <p className={font.blueTagline}>Meet Our Leaders</p>
          <HorizontalLines />
        </div>
        <div className={styles.leaderContainerRight}>
          <p className={font.greenBorderTransparentText}>Leaders</p>
          <br />
        </div>
      </div>
      <div className={styles.scrollContainer}>
        <LeaderImageScroll />
      </div>
    </div>
  );
};

export default Leaders;

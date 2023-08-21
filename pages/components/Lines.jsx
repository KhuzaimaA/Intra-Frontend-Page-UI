import React from "react";
import styles from "../../styles/Lines.module.css";

const HorizontalLines = () => {
  return (
    <div className={styles.lineContainer}>
      <div className={styles.greenLine}></div>
      <div className={styles.blueLine}></div>
    </div>
  );
};

export default HorizontalLines;

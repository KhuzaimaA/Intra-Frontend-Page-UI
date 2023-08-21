import React, {useState} from "react";
import styles from "../../../../styles/About/JoinUs/JoinUs.module.css";
import font from "../../../../styles/Fonts.module.css";
import JoinUsForm from "./JoinUsForm";
import HorizontalLines from "../../Lines";

const JoinUsContainer = () => {

  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.joinUsContainer}>
      <div className={styles.column1}>
        <p className={font.greenHeading}>Careers</p>
        <p className={font.blueTagline}>Join Us</p>
        <HorizontalLines/>
        <p className={font.taglineInGrey}>Some Text</p>
        <div className={styles.textButtonContainer}>
          <button className={styles.button} onClick={togglePopup}>Apply</button>
        </div>
      </div>
      <div className={styles.column2}>
        <div className={styles.imageContainer1}>
          <p className={font.imageText}>ONE VISION</p>
        </div>
        <div className={styles.imageContainer2}>
          <p className={font.imageText}>ONE TEAM</p>
        </div>
        <div className={styles.imageContainer3}>
          <p className={font.imageText}>ONE GOAL</p>
        </div>
      </div>
      {showPopup && <JoinUsForm onClose={closePopup}/>}
    </div>
  );
};


export default JoinUsContainer;

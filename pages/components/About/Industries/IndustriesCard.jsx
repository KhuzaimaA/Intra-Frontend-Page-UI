import React from 'react';
import styles from '../../../../styles/About/Industries/IndustriesCard.module.css';
import font from "../../../../styles/Fonts.module.css"
const IndustryCard = ({ logo, title, description, cardType }) => {
  return (
    <div className={cardType == 'left' ? styles.industryCardLeft : styles.industryCardRight}>
     <div className={styles.cardLogo}>
        {logo}
      </div>
      <h2 className={font.greenHeading}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default IndustryCard;

import React from "react";
import styles from "../../../../styles/About/Vision/OurVision.module.css";
import font from "../../../../styles/Fonts.module.css"
import HorizontalLines from "../../Lines";
const OurVision = () => {
  return (
    <div>
        <div className={styles.aboutUsImage} />
      <div className={styles.visionContainer} id="ourVision">
          <div className={styles.column1}>
            <p className={font.greenHeading}>Our Vision</p>
            <p className={font.blueTagline}>
            Innovating the future of autonomous technologies 
            </p>
            <HorizontalLines/>
          </div>
          <div className={styles.column2}>
            <div>
              <p className={font.headingInWhite}>Vision</p>
            </div>
            <div>
              {" "}
              <p className={font.taglineInWhite}>
                To revolutionize the way the world operates through the power of
                autonomous technologies.
              </p>
            </div>
          </div>
          <div className={styles.column3}>
            <div>
              <p className={font.headingInBlack}>Mission</p>
            </div>
            <div>
              <p className={font.taglineInGrey}>
                To deliver the greatest value to our customers, partners, and
                stakeholders, while maintaining world-class standards of
                professionalism, integrity, and social responsibility.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default OurVision;
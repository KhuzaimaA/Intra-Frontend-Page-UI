import React from "react";
import styles from "../../../../styles/About/AboutUs/AboutUs.module.css";
import font from "../../../../styles/Fonts.module.css"
import HorizontalLines from "../../Lines";

const AboutUs = () => {
  return (
    <div>
      <div className={styles.textContainer} id="aboutUs">
        <div className={font.leftText}>
          <p className={font.greenHeading}>About Us</p>
          <p className={font.blueTagline}>
            Driving Tomorrows Technologies, Today
          </p>
          <HorizontalLines />
        </div>
        <div className={styles.rightText}>
          <p className={font.greyParagraphText}>
            INTRA Defense Technologies is a SAUDI company, leading in
            development and designing and manufacturing Autonomous Systems and
            Advanced Technologies. We provide advanced technological solutions
            that cater to diverse sectors.
          </p>
          <br />
          <p className={font.greyParagraphText}>
            With a team of highly skilled experts, our innovative solutions are
            built to cater to the needs of various clients, providing them with
            a competitive edge in their respective industries. We prioritize
            quality, efficiency, and innovation, making us a reliable partner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

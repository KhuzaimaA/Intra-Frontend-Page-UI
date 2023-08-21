import React, { useState } from "react";
import styles from "../../../../styles/About/Products/ProductCard.module.css";
import font from "../../../../styles/Fonts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const ProductScroll = () => {
  const [activeOverlay1, setActiveOverlay1] = useState(false);
  const [activeOverlay2, setActiveOverlay2] = useState(false);
  const [activeOverlay3, setActiveOverlay3] = useState(false);
  const [activeOverlay4, setActiveOverlay4] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
        <div className={styles.photoContainer}>
          <div
            className={styles.photo}
            style={{
              backgroundImage: "url('/images/product1.png')",
            }}
          >
            <h1
              className={`${styles.title} ${
                activeOverlay1 ? styles.activeTitle1 : ""
              } ${font.blueTaglineShort}`}
            >
              Tactical
            </h1>
            <br />
            <div>
              <p
                className={`${styles.description} ${
                  activeOverlay1 ? styles.activeDiscription1 : ""
                } `}
              >
                "Built with the Vertical Take off and Landing (VTOL) technology,
                ASEF series was designed to be easily deployed, runway
                independent, with autonomous operations. Enabling the end user
                with a true tactical advantage for missions that requires
                agility"
              </p>
            </div>
            <button
              className={styles.icon}
              onClick={() => {
                setActiveOverlay1(!activeOverlay1);
              }}
            >
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </button>
            <div
              className={`${styles.opacityOverlay} ${
                activeOverlay1 ? styles.active : ""
              }`}
            ></div>
          </div>
        </div>
        {/* IMAGE 2 */}
        <div className={styles.photoContainer}style={{
              marginTop: "100px",
            }}>
          <div
            className={styles.photo}
            style={{
              backgroundImage: "url('/images/product2.png')",
            }}
          >
            <h1
              className={`${styles.title2} ${
                activeOverlay2 ? styles.activeTitle2 : ""
              } ${font.blueTaglineShort}`}
            >
              Operational
            </h1>
            <br />
            <div>
              <p
                className={`${styles.description} ${
                  activeOverlay2 ? styles.activeDiscription2 : ""
                } `}
              >
                "With its extensive operational experience INTRA is currently
                developing SAMOOM-OO UAS as a futuristic state-of-the-art
                operational UAS. SAMOOM-OO is developed as the “Gap-filler” of
                the existing gaps, in addition to high versatility and
                robustness to support evolving payload technology"
              </p>
            </div>
            <button
              className={styles.icon}
              onClick={() => {
                setActiveOverlay2(!activeOverlay2);
              }}
            >
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </button>
            <div
              className={`${styles.opacityOverlay} ${
                activeOverlay2 ? styles.active : ""
              }`}
            ></div>
          </div>
        </div>
        {/* IMAGE 3 */}
        <div className={styles.photoContainer}>
          <div
            className={styles.photo}
            style={{
              backgroundImage: "url('/images/product3.png')",
            }}
          >
            <h1
              className={`${styles.title} ${
                activeOverlay3 ? styles.activeTitle3 : ""
              } ${font.blueTaglineShort}`}
            >
              Strategic
            </h1>
            <br />
            <div>
              <p
                className={`${styles.description} ${
                  activeOverlay3 ? styles.activeDiscription3 : ""
                } `}
              >
                "INTRA SAMOOM-SM UAS platform is classified as the
                Strategical-Medium Altitude High Endurance platform, currently
                under development, the platform is designed to deliver full
                coverage of war field as its operational area"
              </p>
            </div>
            <button
              className={styles.icon}
              onClick={() => {
                setActiveOverlay3(!activeOverlay3);
              }}
            >
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </button>
            <div
              className={`${styles.opacityOverlay} ${
                activeOverlay3 ? styles.active : ""
              }`}
            ></div>
          </div>
        </div>
        {/* Image 4 */}
        <div className={styles.photoContainer}style={{
              marginTop: "100px",
            }}>
          <div
            className={styles.photo}
            style={{
              backgroundImage: "url('/images/product4.png')",
            }}
          >
            <h1
              className={`${styles.title} ${
                activeOverlay4 ? styles.activeTitle4 : ""
              } ${font.blueTaglineShort}`}
            >
              Persistent
            </h1>
            <br />
            <div>
              <p
                className={`${styles.description} ${
                  activeOverlay4? styles.activeDiscription4 : ""
                } `}
              >
                Rased aerostats series is a tethered unmanned air vehicles for
                persistent surveillance, communications, intelligence and more.
                Rased Aerostat Systems advanced streamlined platforms to elevate
                a wide range of payloads to high operation altitude.
              </p>
            </div>
            <button
              className={styles.icon}
              onClick={() => {
                setActiveOverlay4(!activeOverlay4);
              }}
            >
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </button>
            <div
              className={`${styles.opacityOverlay} ${
                activeOverlay4 ? styles.active : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScroll;

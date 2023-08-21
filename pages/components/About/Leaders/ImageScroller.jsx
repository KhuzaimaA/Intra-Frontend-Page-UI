import React, { useState } from "react";
import styles from "../../../../styles/About/Leaders/ImageScroller.module.css";
import font from "../../../../styles/Fonts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const LeaderImageScroll = () => {
  const [activeOverlay1, setActiveOverlay1] = useState(false);
  const [activeOverlay2, setActiveOverlay2] = useState(false);
  const [activeOverlay3, setActiveOverlay3] = useState(false);
  const [activeOverlay4, setActiveOverlay4] = useState(false);

  const handleMouseEnter1 = () => {
    setActiveOverlay1(true);
  };

  const handleMouseLeave1 = () => {
    setActiveOverlay1(false);
  };

  const handleMouseEnter2 = () => {
    setActiveOverlay2(true);
  };

  const handleMouseLeave2 = () => {
    setActiveOverlay2(false);
  };

  const handleMouseEnter3 = () => {
    setActiveOverlay3(true);
  };

  const handleMouseLeave3 = () => {
    setActiveOverlay3(false);
  };

  const handleMouseEnter4 = () => {
    setActiveOverlay4(true);
  };

  const handleMouseLeave4 = () => {
    setActiveOverlay4(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
        <div className={styles.photoContainer}>
          <div
            className={styles.photo}
            style={{
              backgroundImage: "url('/images/Chairman.jpeg')",
            }}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <h1
              className={`${styles.title} ${
                activeOverlay1 ? styles.activeTitle1 : ""
              } ${font.taglineInWhiteShort}`}
            >
              Salman Alshathri
            </h1>
            <div className={`${styles.icon} ${
                activeOverlay1 ? styles.activeIcon: ""
              }`}><FontAwesomeIcon icon={faLongArrowAltRight} /></div>              <h1
              className={`${styles.job} ${
                activeOverlay1 ? styles.activeJob1 : ""
              } ${font.taglineInWhiteSmall}`}
            >
              Chairman
            </h1>
            <br />
            <div>
              <p
                className={`${styles.description} ${
                  activeOverlay1 ? styles.activeDiscription1 : ""
                } `}
              >
                Our Chairman is a visionary leader with a vast experience and
                knowledge in the field of Advance technologies. With a passion
                for innovation and an unwavering commitment to excellence, he
                has played a pivotal role in shaping our company's growth and
                success. Under his guidance, our company continues to lead in
                the development and manufacturing of advanced technological
                solutions.
              </p>
            </div>
            <div
              className={`${styles.opacityOverlay} ${
                activeOverlay1 ? styles.active : ""
              }`}
            ></div>
          </div>
        </div>
        {/* IMAGE 2 */}
        <div className={styles.photoContainer}>
          <div
            className={styles.photo}
            style={{
              backgroundImage: "url('/images/CEO.jpeg')",
            }}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <h1
              className={`${styles.title2} ${
                activeOverlay2 ? styles.activeTitle2 : ""
              } ${font.taglineInWhiteShort}`}
            >
              Dr. Hamad Alfouzan
            </h1>
            <div className={`${styles.icon} ${
                activeOverlay2 ? styles.activeIcon: ""
              }`}><FontAwesomeIcon icon={faLongArrowAltRight} /></div>
            <h1
              className={`${styles.job2} ${
                activeOverlay2 ? styles.activeJob2 : ""
              } ${font.taglineInWhiteSmall}`}
            >
              CEO
            </h1>
            <br />
            <div>
              <p
                className={`${styles.description} ${
                  activeOverlay2 ? styles.activeDiscription2 : ""
                } `}
              >
                Our CEO brings a wealth of experience and expertise in leading
                and managing companies, He is committed to driving innovation
                and ensuring that our company's operations and services align
                with the highest standards of quality and efficiency. Under his
                leadership and direction.
              </p>
            </div>
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
              backgroundImage: "url('/images/vp_business.jpeg')",
            }}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          >
            <h1
              className={`${styles.title3} ${
                activeOverlay3 ? styles.activeTitle3 : ""
              } ${font.taglineInWhiteShort}`}
            >
              Engr. Abdulaziz Alhussain
            </h1>
            <div className={`${styles.icon} ${
                activeOverlay3 ? styles.activeIcon: ""
              }`}><FontAwesomeIcon icon={faLongArrowAltRight} /></div>            <h1
              className={`${styles.job3} ${
                activeOverlay3 ? styles.activeJob3 : ""
              } ${font.taglineInWhiteSmall}`}
            >
              VP of Business
            </h1>
            <br />
            <div>
              <p
                className={`${styles.description} ${
                  activeOverlay3 ? styles.activeDiscription3 : ""
                } `}
              >
                Our VP of Business brings a unique blend of skills and expertise
                in engineering and business development. With a deep
                understanding of technical and engineering aspects of advance
                technologies, he has been instrumental in our company's growth
                and success. He has a strong track record of developing and
                delivering innovative technological solutions that meet our
                clients' needs.
              </p>
            </div>
            <div
              className={`${styles.opacityOverlay} ${
                activeOverlay3 ? styles.active : ""
              }`}
            ></div>
          </div>
        </div>
        {/* Image 4 */}
        <div className={styles.photoContainer}>
          <div
            className={styles.photo}
            style={{
              backgroundImage: "url('/images/vp_engineering.png')",
            }}
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
          >
            <h1
              className={`${styles.title} ${
                activeOverlay4 ? styles.activeTitle4 : ""
              } ${font.taglineInWhiteShort}`}
            >
              Engr. Asim Qureshi
            </h1>
            <div className={`${styles.icon} ${
                activeOverlay4 ? styles.activeIcon: ""
              }`}><FontAwesomeIcon icon={faLongArrowAltRight} /></div>            <h1
              className={`${styles.job4} ${
                activeOverlay4 ? styles.activeJob4 : ""
              } ${font.taglineInWhiteSmall}`}
            >
              VP of Engineering
            </h1>
            <br />
            <div>
              <p
                className={`${styles.description} ${
                  activeOverlay4 ? styles.activeDiscription4 : ""
                } `}
              >
                Our VP of Engineering is a seasoned engineer with extensive
                experience in the development and production of advance
                technologies. With his technical expertise and innovative
                mindset, he has been an instrumental part of our company's
                success. He has a proven track record of overseeing the design
                and development of cutting-edge technological solutions from
                conception to completion.
              </p>
            </div>
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

export default LeaderImageScroll;
